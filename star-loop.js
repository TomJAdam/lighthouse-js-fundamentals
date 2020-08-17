/* Prints:
*
**
***
****
*****
****
***
**
*

*/

let star = '';

for (let i = 0; i < 10; i++) {
  if (i === 1) {
    star = '*';
    console.log(star);
  } else if (i > 1 && i < 6) {
    star += '*';
    console.log(star);
  } else if (i > 5 && i < 10) {
    star = star.slice(0, -1);
    console.log(star);
  }
}
