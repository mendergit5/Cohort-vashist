// write basic express boilerplate code
// with express.json() middleware
const express = require("express");
const { createCard, updateCard } = require("./types");
const { card } = require("./db");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

// To add new card 
app.post("/card", async function (req, res) {
    const createpayload = req.body;
    console.log(createpayload)
    const parsepayload = createCard.safeParse(createpayload);
    console.log(parsepayload)
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

// To get new cards
app.get("/cards", async function (req, res) {
    try {
        const cards = await card.find({});
        res.json({
          cards,
        });
      } catch (error) {
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
})

// Remove card, :id is route parameter as Route parameters are a way to capture values from the URL and make them accessible in your route handler.
//  from the URL and makes it available as req.params.id in the route handler.
app.delete("/card/:id", async function (req, res) {
  try {
    const removedCard = await card.findOneAndDelete({ _id: req.params.id });
    console.log(removedCard);
    if (removedCard) {
      res.json({
        msg: "Card Removed",
      });
    } else {
      res.status(404).json({
        msg: "Card not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

// Update card
app.patch("/card/:_id", async function (req, res) {
  try {
    const updatePayload = req.body;
    console.log(updatePayload);
    const parsePayload = updateCard.safeParse(updatePayload);
    console.log(parsePayload);
    if (!parsePayload.success) {
      res.status(411).json({
        msg: "You sent wrong inputs",
      });
      return;
    }

    const updatedCard = await card.findByIdAndUpdate(
      req.params._id,
      {
        $set: {
          heading: updatePayload.heading,
          headingDesc: updatePayload.headingDesc,
          subheading: updatePayload.subheading,
          subheadingDesc1: updatePayload.subheadingDesc1,
          subheadingDesc2: updatePayload.subheadingDesc2,
          subheadingDesc3: updatePayload.subheadingDesc3,
          linkedinURL: updatePayload.linkedinURL,
          twitterURL: updatePayload.twitterURL,
        },
      },
      { new: true }
    );

    if (updatedCard) {
      res.json({
        msg: "Card Updated",
      });
    } else {
      res.status(404).json({
        msg: "Card not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});


app.listen(3000);

module.exports= app;
