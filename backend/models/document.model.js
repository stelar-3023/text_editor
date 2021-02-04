const mongoose = require("mongoose")

const Schema = mongoose.Schema

const documentSchema = new Schema({

}, {
    timestamps: true
})

const Document = mongoose.model("Document", documentSchema)

module.exports = Document