const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/booksRoutes.js");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
dotenv.config();
app.use("/api/books", router); // localhost:5000/books

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(() => {

    console.log("Connected to DB");

}).catch((error) => {
    console.log(error.message);
})

//Create Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at: http://localhost:${port}`);
})