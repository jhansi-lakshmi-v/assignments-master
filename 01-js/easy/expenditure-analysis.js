/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let justcatArray = transactions.map(function(transaction) {
    return transaction.category;
  })

  let uniqueCatArr = justcatArray.filter(function(category, pos) {
    if (justcatArray.indexOf(category) == pos) {
      return true;
    }
  });



  let categoryPriceArr = [];
  for (let i = 0; i < uniqueCatArr.length; i++) {
    let itemprice = transactions.filter(function(transaction) {
      return transaction.category == uniqueCatArr[i];
    }).reduce(function(sum, item) {
      return sum + item.price;
    },0);

    
    categoryPriceArr.push({"category": uniqueCatArr[i], "totalSpent": itemprice});
    
  }


  return categoryPriceArr;
}


module.exports = calculateTotalSpentByCategory;
