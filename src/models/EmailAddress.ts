type EmailAddress = string;

function EmailAddress(emailAddress: string): EmailAddress {
  if (/.+@.+/.test(emailAddress)) return emailAddress;
  throw new Error(`${emailAddress} is not a valid emailAddress`);
}

export default EmailAddress;
