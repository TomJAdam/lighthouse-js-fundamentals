/* 
Prints 100 - 200
Prints Loopy if a multiple of 3
Prints Lighthouse if a multiple of 4
Prints LoopyLighthouse if a multiple of 3 & 4
*/
  

for (let x = 100; x <= 200; x++) {
  if ((x % 3 === 0) && (x % 4 === 0)) {
    console.log('LoopyLighthouse');
  } else if (x % 4 === 0) {
    console.log('Lighthouse');
  } else if (x % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(x);
  }
}