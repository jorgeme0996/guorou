var mongoose = require("mongoose");

var ContactoSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    comment: String
});

module.exports = mongoose.model("Contacto", ContactoSchema);