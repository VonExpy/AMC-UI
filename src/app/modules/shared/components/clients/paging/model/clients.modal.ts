/**
 * A model for an individual corporate employee
 */
 export class clientsModal {
    name: string;
    email: string;
    phone: string;
    created: string;
    contactName: string;
  
    constructor(name: string, email: string, phone: string, created: string, contactName: string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.created = created;
      this.contactName = contactName;
    }
  }