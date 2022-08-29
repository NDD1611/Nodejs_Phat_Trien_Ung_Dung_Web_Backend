
const express = require('express')
const app = express()
require('dotenv').config();
const initWebRoutes = require("./route/route.js")
const { connectDB } = require("./database/config.js")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(express.static('./src/image'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
initWebRoutes(app);
connectDB();

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

