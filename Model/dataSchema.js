const { Schema, model } = require("mongoose")

const dataSchema = new Schema({

})

const Data = model("data", dataSchema)

module.exports = Data;