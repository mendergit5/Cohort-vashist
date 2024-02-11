const express = require('express');
const { Account } = require('../db');
const { authMiddleware } = require('../middleware');
const { default: mongoose } = require('mongoose');

const router = express.Router();


router.get("/balance",authMiddleware, async(req, res) => {

    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })

});

/* 
  request body:
   { 
     to: string,
  	amount: number
   }
*/

router.post("/transfer",authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount, to} = req.body;

    
    // Fetch the accounts within the transaction
   const senderaccount = await Account.findOne({ userId: req.userId }).session(session);


    // 1. check does user has account and check it has balance amount to transfer
   if (!senderaccount || senderaccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    // 2. find userID of 'to' has account in db
    const toAccount = await Account.findOne({ userId: to }).session(session);
    
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    // 3. if account exists, deduct sender amount first from its balance
    
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    
    // 4. if account exists, ADD reciever amount to its balance
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    
    res.json({
        message: "Transfer successful"
    });
})


module.exports = router;