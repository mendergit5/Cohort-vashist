const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {

    console.log(username);
    console.log(password);
    if (ALL_USERS.some(obj => obj.username === username && obj.password === password))
        return true;
    else
        return false;
}

const username = "priya@gmail.com";
const password = "123321";

console.log(userExists(username,password));