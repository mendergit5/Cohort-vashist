const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:qn8lzhwbOszZOIWu@cluster0.ta2pb0v.mongodb.net/cards");
const cardSchema = mongoose.Schema({
    heading: String, // Vashist
    headingDesc: String, // headingdescription
    subheading: String,  // subheading
    subheadingDesc1: String,  // subheading
    subheadingDesc2: String,  // subheading
    subheadingDesc3: String,  // subheading
    linkedinURL:String, // linkedin button url
    twitterURL:String, // twitter button url
})

const card = mongoose.model('cards', cardSchema);

module.exports = {
    card
}
