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
    // const newData = data.map((record) => {
    //   const mcq = new Mcq({
    //     question: record.question,
    //     optionA: record.option1,
    //     optionB: record.option2,
    //     optionC: record.option3,
    //     optionD: record.option4,
    //     answer: record.answer,
    //     category: record.Category,
    //     tags: record.Tags,
    //   });
    //   mcq.save().then();
    //   return record;
    // });

    res.send({ saved: true });
  } else {
    res.send({ empty: true });
  }
};
