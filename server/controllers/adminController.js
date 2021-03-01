const jwt = require("jsonwebtoken");

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === "admin" && password === "12345") {
    const token = jwt.sign("hello", "mykey");
    res.send({ token });
  } else res.send({ flag: true });
};
