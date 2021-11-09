/**
 * A model for an individual corporate employee
 */
 export class vendorModal {
    name: string;
    email: string;
    phone: string;
    address: string;
  
    constructor(name: string, email: string, phone: string, address: string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
    }
  }