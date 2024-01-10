// write basic express boilerplate code
// with express.json() middleware
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")


app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const createpayload = req.body;
    const parsepayload = createTodo.safeParse(createpayload);
    if (!parsepayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false // marked false for now, as someone creating todo will mark completed at frontend
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({}); // await because it return promise as it takes time to find data from db

    res.json({
        todos
    })

})

app.put("/completed",async  function (req, res) {
    const updatepayload = req.body;
    const parsepayload = updateTodo.safeParse(updatepayload);
    if (!parsepayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);
