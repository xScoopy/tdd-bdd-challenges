// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

shoppingCart = []

const createItem = (name, price) => {
  // should return a JSON object for the item
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
}

const addItemToShoppingCart = (item) => {
  // should add item to shopping cart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
}

module.exports = { 
  sayHello, area, perimeter, circleArea,
  createItem, getShoppingCart, addItemToShoppingCart, getNumItemsInCart,
  removeItemFromCart
}
