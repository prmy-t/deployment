const jwt = require("jsonwebtoken");
// const fs = require("fs");
// const xlsx = require("xlsx");
const Mcq = require("../models/mcq");

exports.getMcqCatagories = (req, res, next) => {
  Mcq.find()
    .then((mcqs) => {
      let categories = [];

      for (let i in mcqs) {
        // console.log(mcqs[i].category);
        let temp = mcqs[i].category.split(" ");
        console.log(temp);
        for (let j in temp) {
          if (categories.includes(temp[j])) continue;
          else categories.push(temp[j]);
        }
      }
      res.send({ categories });
    })
    .catch();
};
