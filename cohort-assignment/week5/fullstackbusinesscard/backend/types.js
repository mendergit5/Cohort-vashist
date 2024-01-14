const zod  = require("zod");

const createCard = zod.object({
    heading: zod.string(), // Vashist
    headingDesc: zod.string(), // headingdescription
    subheading: zod.string(),  // subheading
    subheadingDesc1: zod.string(),  // subheading
    subheadingDesc2: zod.string(),  // subheading
    subheadingDesc3: zod.string(),  // subheading
    linkedinURL: zod.string().optional(), // linkedin button url
    twitterURL: zod.string().optional(), // twitter button url
})

const updateCard = zod.object({
    twitterURL: zod.string(),
  });


module.exports = {
    createCard: createCard,
    updateCard: updateCard,
}
