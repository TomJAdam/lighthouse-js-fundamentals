

const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;

// for loop:
// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }


// for .. of loop to simplify looping through an array
for(let amount of amounts) {
  total += amount;
}

console.log('Order total is: ', total);

// for .. of loop is useful for going through an array start to finish
// Not as powerful as a tradtitional for loop