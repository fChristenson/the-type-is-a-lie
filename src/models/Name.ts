type Name = {
  firstName: String
  lastName: String
};

function Name(firstName: string, lastName: string): Name {
  return {
    firstName,
    lastName
  }
}

export default Name;
