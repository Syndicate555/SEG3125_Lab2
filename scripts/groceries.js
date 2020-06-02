// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "banana",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 0.99,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "apple",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 2.99,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "eggs",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 0.69,
    VegetarianAndGluten: true,
  },
  {
    name: "pasta",
    vegetarian: true,
    organic: true,
    glutenFree: false,
    price: 0.99,
    VegetarianAndGluten: false,
  },
  {
    name: "tuna",
    vegetarian: false,
    organic: true,
    glutenFree: true,
    price: 0.5,
    VegetarianAndGluten: false,
  },
  {
    name: "chicken",
    vegetarian: false,
    organic: true,
    glutenFree: true,
    price: 2.99,
    VegetarianAndGluten: false,
  },
  {
    name: "milk",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 0.99,
    VegetarianAndGluten: true,
  },

  {
    name: "bread",
    vegetarian: true,
    organic: true,
    glutenFree: false,
    price: 2.35,
    VegetarianAndGluten: false,
  },
  {
    name: "salmon",
    vegetarian: false,
    organic: true,
    glutenFree: true,
    price: 10.0,
    VegetarianAndGluten: false,
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    if (restriction == "Vegetarian" && prods[i].vegetarian == true) {
      product_names.push(prods[i]);
    } else if (restriction == "GlutenFree" && prods[i].glutenFree == true) {
      product_names.push(prods[i]);
    } else if (restriction == "None") {
      product_names.push(prods[i]);
    }
  }
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}

console.log(products[0].price);
