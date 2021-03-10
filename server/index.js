//package import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const port = 3000 || process.env.PORT;

mongoose.set("useFindAndModify", false);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/Users/prmy/Documents/Upwork/McqApp/server/temp/",
  })
);

const publicRoutes = require("./routes/publicRoute");
const adminRoutes = require("./routes/adminRoute");

app.use(publicRoutes);
app.use(adminRoutes);
// console.log(process.env.MONGO_URL + " this is port");
mongoose
  .connect(process.env.MONGO_URL, {
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
