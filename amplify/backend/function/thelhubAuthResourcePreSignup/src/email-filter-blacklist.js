const xml2js = require('xml2js');
const { verifyUser, payloadChanges } = require('./asc');
const request = require('request');

exports.handler = (event, context, callback) => {
  console.log('Metadata received: ', event.request.clientMetadata);
  // blacklisted domains
  const bld = process.env.DOMAINBLACKLIST.split(',').map(d => d.trim());

  const { email } = event.request.userAttributes;
  const domain = email.substring(email.indexOf('@') + 1);

  if (bld.includes(domain)) {
    callback(new Error(`Invalid email domain: ${domain}`), event);
  } else {
    // Invoke asc to call asc to verify the license number
    console.log('Metadata received: ', event.request.clientMetadata);
    console.log('User Sign-up Attrs: ', event.request.userAttributes);
    const licenseNumberInRequest = event.request.userAttributes['custom:license_number'];
    const firstNameInRequest = event.request.userAttributes['given_name'];
    const lastNameInRequest = event.request.userAttributes['family_name'];
    let ascVerifyOptions = verifyUser({
      'licenseNumber': licenseNumberInRequest,
      'firstName': firstNameInRequest,
      'lastName': lastNameInRequest
    });

    console.log('ASC options: ', ascVerifyOptions);

    // Users Signing-Up as Appraiser Admin (or) Other channels --> will pass license as <none>
    if(event.request.userAttributes['custom:license_number'] !== '<none>') {
      // Invoke asc service to verify the user's license.
      request(ascVerifyOptions, (error, response, body) => {
        console.log('Response: ', response);
        console.log('Body in Response: ', body);
        if (!error && response.statusCode == 200) {
          xml2js.parseString(body, async (err, result) => {
            if (err) {
              callback(new Error("Invalid error while verifying with ASC."), event);
            }
            try {
              const xml = result['soap:Envelope']['soap:Body'][0].RunQueryResponse[0]['RunQueryResult'][0]['diffgr:diffgram'][0]['NewDataSet'][0]['Appraiser'];
              console.log('XML received: ', xml);
              const details = payloadChanges(xml);
              console.log('payloadChanges: ', details);
              let user = {};
              if (details.status == 'A') {
                user.verified = false
                Object.keys(details).forEach((key) => {
                  user[key] = details[key];
                });
                // success
                // event.response.autoConfirmUser = true;
                // event.response.autoVerifyEmail = true;
                // event.response.autoVerifyPhone = true;
                callback(null, event);
              } else {
                // error
                console.log('Invalid response from ASC: ', xml);
                callback(new Error("No Active Appraisers found"), event);
              }
            } catch (e) {
              console.log('Error occured: ', JSON.stringify(e, null, 2));
              callback(new Error("Please verify appraiser details"), event);
            }
          });
        };
      });
    } else {
      // success
      event.response.autoConfirmUser = true;
      event.response.autoVerifyEmail = true;
      event.response.autoVerifyPhone = true;
      callback(null, event);
    }
  }
};