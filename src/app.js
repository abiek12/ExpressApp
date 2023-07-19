const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/Login", (req, res) => {
  res.send("Login");
});

app.post("/Register", (req, res) => {
  res.send("Register");
});

app.post("/Signup", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log({email});
  if (password == "1234") {
    res.send("login successful");
  } else {
    res.send("Password is incorrect");
  }
});

app.listen(5000, () => {
  console.log("server listen at port 5000");
});
