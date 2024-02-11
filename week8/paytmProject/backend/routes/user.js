const express = require('express');
const zod = require("zod");
const router = express.Router();
const { JWT_SECRET } = require("../config");
const { User, Account } = require("../db");
const { authMiddleware } = require('../middleware');
const jwt = require("jsonwebtoken")


const signupSchema = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string(),

})

router.post("/signup", async (req, res) => {
    // 1. checking entered inputs
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    // 2. if User's username is already signedup
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    // 3. if user entered valid credentials then now we add users to db
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    const userId = user._id;


    //// ----- create new account in account table ------////

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000 // give the user a random balance between 1 and 10000
    })

    /// -------


    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})

router.post("/signin", async (req, res) => {

    // 1. checking entered inputs
    const { success } = signinSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Invalid Email / Incorrect inputs"
        })
    }

    const Userexists = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (Userexists) {
        const userId = Userexists._id;

        const token = jwt.sign({
            userId
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})


router.put("/", authMiddleware, async (req, res) => {
    // check inputs
    const { success } = updateBody.safeParse.apply(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    // update given input in database
    await User.updateOne(req.body, {
        _id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })

})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })
    // note to ensure only return other user details not password
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})


module.exports = router