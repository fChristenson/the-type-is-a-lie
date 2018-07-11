import Name from './Name';
import EmailAddress from './EmailAddress';
import typeChecker from '../lib/typechecker';

export default class User {
  name: Name
  emailAddress: EmailAddress

  constructor(name: Name, emailAddress: EmailAddress) {
    this.name = name;
    this.emailAddress = emailAddress;
  }

  static from(json: any = {}): User {
    const maybeName = json.name || {};
    const firstName: string = typeChecker("string", "", "firstName")(maybeName.firstName);
    const lasttName: string = typeChecker("string", "", "lastName")(maybeName.lastName);
    const emailAddress: string = typeChecker("string", "", "emailAddress")(json.emailAddress);
    const name: Name = Name(firstName, lasttName);
    const email: EmailAddress = EmailAddress(emailAddress);
    return new User(name, email);
  }
}