// write basic express boilerplate code
// with express.json() middleware
const express = require("express");
const { createCard } = require("./types");
const { card } = require("./db");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.post("/card", async function (req, res) {
    const createpayload = req.body;
    const parsepayload = createCard.safeParse(createpayload);
    if (!parsepayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }
    
    // put it in mongodb
    await card.create({
        heading: createpayload.heading, // Vashist
        headingDesc: createpayload.headingDesc, // headingdescription
        subheading: createpayload.subheading,  // subheading
        subheadingDesc1: createpayload.subheadingDesc1,  // subheading
        subheadingDesc2: createpayload.subheadingDesc2,  // subheading
        subheadingDesc3: createpayload.subheadingDesc3,  // subheading
        linkedinURL:createpayload.linkedinURL, // linkedin button url
        twitterURL:createpayload.twitterURL, // twitter button url
    })

    res.json({
        msg: "Card Created"
    })
})

app.get("/cards", async function (req, res) {
    const cards = await card.find({}); // await because it return promise as it takes time to find data from db
    res.json({
        cards
    })

})


app.listen(3000);
