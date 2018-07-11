import User from '../models/User';

(() => {
  fetch("http://localhost:3000/user").then(res => {
    return res.json(); // what is this?
  }).then((user: User) => {
    //const user = User.from(json);

    // the type is a lie!
    console.log(user.name.firstName, user.name.lastName, user.emailAddress);
    console.log("--------------------------");
  });
})();
