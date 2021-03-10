const jwt = require("jsonwebtoken");
const fs = require("fs");
const xlsx = require("xlsx");
const Mcq = require("../models/mcq");

exports.getMcqTable = (req, res, next) => {
  Mcq.find()
    .then((mcq) => {
      res.send(mcq);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getTagsList = (req, res, next) => {
  let tagObj = {};
  Mcq.find()
    .then((mcq) => {
      for (let i in mcq) {
        if (mcq[i].tags) {
          let tagArray = mcq[i].tags;
          for (let j in tagArray) {
            if (tagObj.hasOwnProperty(tagArray[j])) {
              tagObj[tagArray[j]]++;
            } else {
              tagObj[tagArray[j]] = 1;
            }
          }
        }
      }
      res.send({ tagObj });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getCategoriesList = (req, res, next) => {
  let categoriesObj = {};
  Mcq.find()
    .then((mcq) => {
      for (let i in mcq) {
        if (mcq[i].category) {
          if (categoriesObj.hasOwnProperty(mcq[i].category)) {
            categoriesObj[mcq[i].category]++;
          } else {
            categoriesObj[mcq[i].category] = 1;
          }
        }
      }
      res.send({ categoriesObj });
    })
    .catch((err) => {
      console.log(err);
    });
};

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
    var wb = xlsx.readFile("../client/static/files/" + file.name);
    var ws = wb.Sheets["Sheet1"];
    const data = xlsx.utils.sheet_to_json(ws);
    for (let i in data) {
      data[i].Category =
        data[i].Category.charAt(0).toUpperCase() + data[i].Category.slice(1);
      let tags = [];
      if (data[i].Tags) {
        tags = data[i].Tags.split(", ");
        for (var j = 0; j < tags.length; j++) {
          tags[j] = tags[j].charAt(0).toUpperCase() + tags[j].slice(1);
        }
      } else tags = null;

      const mcq = new Mcq({
        date: datePicker(),
        question: data[i].question,
        optionA: data[i].option1,
        optionB: data[i].option2,
        optionC: data[i].option3,
        optionD: data[i].option4,
        answer: data[i].answer,
        category: data[i].Category,
        tags: tags,
      });
      mcq.save().then().catch();
    }
    res.send({ saved: true });
  } else {
    res.send({ empty: true });
  }
};

exports.postAddMcq = (req, res, next) => {
  const question = req.body.mcq.question;
  const category = req.body.mcq.category;
  const tags = req.body.mcq.tagsArray;
  const optionA = req.body.mcq.optionA;
  const optionB = req.body.mcq.optionB;
  const optionC = req.body.mcq.optionC;
  const optionD = req.body.mcq.optionD;
  const answer = req.body.mcq.answer;
  const mcq = new Mcq({
    date: datePicker(),
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
exports.postEditMcq = (req, res, next) => {
  console.log(req.body.mcq);
  const id = req.body.mcq._id;
  const question = req.body.mcq.question;
  const category = req.body.mcq.category;
  const tags = req.body.mcq.tagsArray;
  const optionA = req.body.mcq.optionA;
  const optionB = req.body.mcq.optionB;
  const optionC = req.body.mcq.optionC;
  const optionD = req.body.mcq.optionD;
  const answer = req.body.mcq.answer;
  Mcq.findByIdAndUpdate(
    { _id: id },
    {
      question: question,
      optionA: optionA,
      optionB: optionB,
      optionC: optionC,
      optionD: optionD,
      answer: answer,
      category: category,
      tags: tags,
    }
  )
    .then(() => {
      res.send("saved");
    })
    .catch((err) => console.log(err));
};

exports.postDeleteMcq = (req, res, next) => {
  const itemId = req.body.itemId;
  Mcq.findByIdAndRemove(itemId)
    .then(() => {
      res.send("success");
    })
    .catch((err) => console.log(err));
};
exports.postDeleteSelectedMcqs = (req, res, next) => {
  const selectedMcqs = req.body.selectedMcqs;
  for (let i in selectedMcqs) {
    let mcqId = selectedMcqs[i]._id;
    Mcq.findByIdAndRemove(mcqId)
      .then()
      .catch((err) => console.log(err));
  }
  res.send("success");
};

exports.getMcqTableByTag = (req, res, next) => {
  const tag = req.params.tag;
  Mcq.find({ tags: tag })
    .then((mcqs) => {
      res.send({ mcqs });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getMcqTableByCategory = (req, res, next) => {
  const category = req.params.category;
  Mcq.find({ category })
    .then((mcqs) => {
      res.send({ mcqs });
    })
    .catch((err) => {
      console.log(err);
    });
};

function datePicker() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return today;
}
