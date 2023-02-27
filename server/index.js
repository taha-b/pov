const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const cors = require("cors")
const userRouter = require("./routes/users-router")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())

app.use("/api/user", userRouter)

app.listen(PORT, function () {
    console.log("listening on port 3000!");
});
