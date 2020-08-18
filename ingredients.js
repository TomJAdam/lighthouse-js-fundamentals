//Iterating over arrays: Banana Bread
// coding challenge

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}
// Write a for loop that prints out the contents of ingredients:

for (let c = 0; c < ingredients.length; c++) {
  console.log(ingredients[c]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let d = 0; d < ingredients.length; d++) {
  console.log(ingredients.reverse());
  if  (d === 0) {
    break;
  }
}