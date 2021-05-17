const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://daeun:ekdms2954@react.u657q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected Success..."))
  .catch((err) => console.log("MongoDB Connected Error...", err));

app.get("/", (req, res) => res.send("hello world!"));

app.listen(port, () => console.log(`port ::: ${port}`));
