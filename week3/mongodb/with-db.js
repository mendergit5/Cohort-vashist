// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect(
//     "mongodb+srv://admin:qn8lzhwbOszZOIWu@cluster0.ta2pb0v.mongodb.net/",
// );

// const User = mongoose.model("User", {
//     name: String,
//     username: String,
//     pasword: String,
// });

// const app = express();
// app.use(express.json());

// // function userExists(username, password) {
// //     User.find({ name: username}, {password:password}, function (err, docs) {
// //         if (err){
// //             console.log(err);
// //             return false;
// //         }
// //         else{
// //             console.log("Second function call : ", docs);
// //             return true;
// //         }
// //     });
// // }

// async function userExists(username, password) {
//     try {
//         const data = await User.findOne({ username: username });
//         if (data) return true;
//         else return false
//     } catch (err) {
//         console.error(err);
//         return false; // Handle errors appropriately
//     }
// }

// app.post("/signin", async function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (!userExists(username, password)) {
//         return res.status(403).json({
//             msg: "User doesnt exist in our in memory db",
//         });
//     }

//     var token = jwt.sign({ username: username }, "shhhhh");
//     return res.json({
//         token,
//     });
// });

// app.get("/users", function (req, res) {
//     const token = req.headers.authorization;
//     try {
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         // return a list of users other than this username from the database
//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid token",
//         });
//     }
// });

// app.listen(3000);

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
    "mongodb+srv://admin:qn8lzhwbOszZOIWu@cluster0.ta2pb0v.mongodb.net/",
);

const UserProfileSchema = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
    try {
        const data = await UserProfileSchema.findOne({ username: username });
        if (data) return true;
        else return false
    } catch (err) {
        console.error(err);
        return false; // Handle errors appropriately
    }
}

app.post('/signup', function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password);

    const userDetails = new UserProfileSchema({
        name: name,
        username: username,
        password: password
    });
    userDetails.save().then(doc => {
        res.send(doc)

    })
        .catch(err => console.log(err))
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        console.log('from sigup' + userExists(username, password))
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", async function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        const users = await UserProfileSchema.find({ username: { $ne: username } });

        return res.status(200).json(users);

    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3001, () => {
    console.log("server is started")
});
