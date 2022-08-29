const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/CT449');
        console.log("connect success!")
    } catch (err) {
        console.log(err)
        console.log("connect failed!")
    }
}

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    favorite: Boolean
})

const contactModel = new mongoose.model("contacts", contactSchema)

module.exports = {
    connectDB: connectDB,
    contactModel: contactModel
}