const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoConnect = require("./db")
const dataRoute = require("./Routes/data")

mongoConnect()

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://shagunkohlii-dashboard.vercel.app'], methods: ["GET", "POST", "DELETE", "PUT"], credentials: true }));

app.use("/api", dataRoute);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});