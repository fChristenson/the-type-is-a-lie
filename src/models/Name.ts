type Name = {
  firstName: string
  lastName: string
};

function Name(firstName: string, lastName: string): Name {
  return {
    firstName,
    lastName
  }
}

export default Name;
