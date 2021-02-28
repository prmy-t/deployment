//package import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db_url =
  "mongodb+srv://prmy:qwer1234@cluster0-wzjug.mongodb.net/mcqApp?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
const cors = require("cors");

// local import
// const publicRoutes = require("./routes/publicRoute");
const adminRoutes = require("./routes/adminRoute");

// app.use(publicRoutes);
app.use(adminRoutes);

app.use(cors());

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .catch((err) => {
    console.log(err);
  });
