/**
 * A model for an individual corporate employee
 */
 export class AppraiserModal {
  name: string;
  company: string;
  email: string;
  phone: string;
  type: string;
  license: string;
  licenseNumber: string;
  regDate: string;
  status: string;
  
    constructor(name: string, company: string, email: string, phone: string, type: string, license: string,licenseNumber:string,regDate:string,status:string) {
      this.name = name;
      this.company = company;
      this.email = email;
      this.phone = phone;
      this.type = type;
      this.license = license;
      this.licenseNumber = licenseNumber;
      this.regDate = regDate
      this.status = status
    }
  }