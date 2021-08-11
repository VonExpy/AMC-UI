const verifyUser = (user) => {
    var xml =
        `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Header>
        <UserCredentialsSoapHeader xmlns="http://tempuri.org/">
          <UserName>null</UserName>
          <Password>null</Password>
        </UserCredentialsSoapHeader>
      </soap12:Header>
      <soap12:Body>
        <RunQuery xmlns="http://tempuri.org/">
          <outputFields>
            <string>Lic_Number</string>
            <string>Lic_Type</string>
            <string>Issue_Date</string>
            <string>Status</string>
            <string>Name_Suffix</string>
            <string>Fname</string>
            <string>Mname</string>
            <string>Lname</string>
            <string>Eff_Date</string>
            <string>Exp_Date</string>
            <string>Phone</string>
            <string>Street</string>
            <string>City</string>
            <string>County</string>
            <string>Zip</string>
            <string>Start_Date</string>
            <string>End_Date</string>
            <string>St_Abbr</string>
            <string>State</string>
            <string>Action_Code</string>
            <string>AQB_Compliant</string>
            <string>Company</string>
          </outputFields>
          <filters>
            <FilterCondition>
              <FieldName>Lic_Number</FieldName>
              <Operator>In</Operator>
              <Operands>
                <string>${user.licenseNumber}</string>
              </Operands>
            </FilterCondition>
            <FilterCondition>
            <FieldName>Fname</FieldName>
            <Operator>In</Operator>
            <Operands>
              <string>${user.firstName}</string>
            </Operands>
          </FilterCondition>
          <FilterCondition>
          <FieldName>Lname</FieldName>
          <Operator>In</Operator>
          <Operands>
            <string>${user.lastName}</string>
          </Operands>
        </FilterCondition>
          </filters>
          <showDiscipline>false</showDiscipline>
          <maxResults>2147483647</maxResults>
        </RunQuery>
      </soap12:Body>
    </soap12:Envelope>`
    var options = {
        url: 'https://www.asc.gov/wsvc/ASCQuerySvc.asmx',
        method: 'POST',
        body: xml,
        headers: {
            'Content-Type': 'application/soap+xml; charset=utf-8',
            'Content-Length': xml.length
        }
    };
    return options
}

const p = (key) => {
  switch (key) {
      case 'lic_number':
          return 'licenseNumber'
          break;
      case 'lic_type':
          return 'licenseType'
          break;
      case 'issue_type':
          return 'issueType'
          break;
      case 'status':
          return 'status'
          break;
      case 'fname':
          return 'firstName'
          break;
      case 'mname':
          return 'middleName'
          break;
      case 'lname':
          return 'lastName'
          break;
      case 'eff_date':
          return 'eff_date'
          break;
      case 'exp_date':
          return 'exp_date'
          break;
      case 'phone':
          return 'phone'
          break;
      case 'street':
          return 'street'
          break;
      case 'county':
          return 'county'
          break;
      case 'city':
          return 'city'
          break;
      case 'zip':
          return 'zipCode'
          break;
      case 'state':
          return 'state'
          break;
      case 'company':
          return 'companyName'
  }
}

const payloadChanges = (d) => {
  const payload = {
      company: {
          address:{}
      }
  };
  d.forEach((a) => {
      if (a.status == 'A') {
          Object.keys(a).forEach((key) => {
              if (p(key) != undefined) {
                  payload[p(key)] = a[key][0];
              }
          })
      }
  });
  return payload;
}

module.exports = {
  verifyUser,
  payloadChanges
}