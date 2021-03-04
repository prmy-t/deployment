const jwt = require("jsonwebtoken");
const fs = require("fs");
const xlsx = require("xlsx");
const Mcq = require("../models/mcq");

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === "admin" && password === "12345") {
    const token = jwt.sign("hello", "mykey");
    res.send({ token });
  } else res.send({ flag: true });
};

exports.postFileUpload = (req, res, next) => {
  if (req.files !== null) {
    const file = req.files.sheet;
    const tempPath = file.tempFilePath;

    const actualPath =
      "/Users/prmy/Documents/Upwork/McqApp/client/static/files/";
    fs.renameSync(tempPath, actualPath + file.name);

    //xlsx to JSON converting
    var wb = xlsx.readFile("../client/static/files/" + file.name, {
      sheetRows: 2,
    });

    var ws = wb.Sheets["Sheet1"];
    const data = xlsx.utils.sheet_to_json(ws);
    console.log(data);

    res.send({ saved: true });
  } else {
    res.send({ empty: true });
  }
};

exports.postAddMcq = (req, res, next) => {
  const question = req.body.question;
  const category = req.body.category;
  const tags = req.body.tags;
  const optionA = req.body.optionA;
  const optionB = req.body.optionB;
  const optionC = req.body.optionC;
  const optionD = req.body.optionD;
  const answer = req.body.answer;
  const mcq = new Mcq({
    question: question,
    optionA: optionA,
    optionB: optionB,
    optionC: optionC,
    optionD: optionD,
    answer: answer,
    category: category,
    tags: tags,
  });
  mcq
    .save()
    .then(() => {
      res.send("saved");
    })
    .catch((err) => console.log(err));
};
