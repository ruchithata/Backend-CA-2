const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    Username: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        minLength: 8,
        maxLength: 16,
        required: true
    },

    DOB: {
        type: Date
    }
}, {timestamps: true});

const userModel = model('userModel', userSchema);
module.exports = userModel;