const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:qn8lzhwbOszZOIWu@cluster0.ta2pb0v.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
