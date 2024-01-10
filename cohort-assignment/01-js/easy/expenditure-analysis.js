/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    var result = []; // array of objects

    // read input array of objects - transactions

    transactions.forEach( obj => {

      var category = obj.category;
      var price = obj.price;

      foundobject = result.find(obj1 => obj1.category === category)
      // check if object is already there with category
      if (foundobject)
        foundobject.totalSpent += price;
      else{
        const newObject = {"category":category, "totalSpent":price};
        result.push(newObject);
      }
    })
    return result;
  }

  module.exports = calculateTotalSpentByCategory;