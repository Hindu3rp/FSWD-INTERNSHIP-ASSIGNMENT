const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hindujarpasupuleti_db_user:H1I2N3@cluster0.2gd51aj.mongodb.net/");
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;