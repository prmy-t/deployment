//package import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const port = 3000 || process.env.PORT;
const db_url =
  "mongodb+srv://prmy:qwer1234@cluster0-wzjug.mongodb.net/mcqApp?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/Users/prmy/Documents/Upwork/McqApp/server/temp/",
  })
);

// const publicRoutes = require("./routes/publicRoute");
const adminRoutes = require("./routes/adminRoute");

// app.use(publicRoutes);
app.use(adminRoutes);

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port);
    console.log(`listening at port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
