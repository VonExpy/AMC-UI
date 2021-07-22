/**
 * A model for an individual corporate employee
 */
 export class orderModal {
    file: string;
    address: string;
    jobtype: string;
    dueDate: string;
    client: string;
    status: string;
  
    constructor(file: string, address: string, jobtype: string, dueDate: string, client: string, status: string) {
      this.file = file;
      this.address = address;
      this.jobtype = jobtype;
      this.dueDate = dueDate;
      this.client = client;
      this.status = status;
    }
  }