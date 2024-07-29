const express = require('express')
const router = express()
const Data = require("../Model/dataSchema")

router.get("/data", async (req, res) => {
    try {
        const data = await Data.find()
        res.json(data)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;