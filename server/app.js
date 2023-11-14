if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
const errorHandler = require("./middlewares/errorHandlers");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(require("./routes/index"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
