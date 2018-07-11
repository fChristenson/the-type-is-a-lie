import express from 'express';
import Name from './models/Name';
import EmailAddress from './models/EmailAddress';
import User from './models/User';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "index.html"));
});

app.get("/user", (req, res) => {
  const name: Name = Name("foo", "bar");
  const emailAddress: EmailAddress = EmailAddress("foo@bar.se");
  const user = new User(name, emailAddress);
  res.json(user);
  //res.json({ foo: 1 }); // ooops I did it again, you have no idea how often this happens
});

export default app;
