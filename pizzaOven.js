// This function eturns a pizza object
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  let pizza = {}
  pizza.crustType = crustType
  pizza.sauceType = sauceType
  pizza.cheeses = cheeses
  pizza.topping = toppings

  return pizza
}

let pizza0 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(pizza0)

let pizza1 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza1)

let pizza2 = pizzaOven("thin", "white sauce", ["mozzarella", "parmesian"], ["italian sausage", "pepperoni", "olives", "garlic"])
console.log(pizza2)

let pizza3 = pizzaOven("cheese", "marinara", ["mozzarella"], ["pineapple", "ham", "bacon"])
console.log(pizza3)


function randomPizza(max) {
  let randomNum = Math.floor(Math.random() * max)
  console.log(randomNum)
  return randomNum
}

switch(randomPizza(4)) {
  case 0:
    console.log(pizza0)
    break;
  case 1: 
    console.log(pizza1)
    break;
  case 2: 
    console.log(pizza2)
    break;
  case 3: 
    console.log(pizza3)
    break;
  default:
    break;
}