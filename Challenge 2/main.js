/* Challenge: Even Fibonacci numbers */

let last = 0;
let current = 1;
const data = [];
for (let i = 0; current < 4000000; i++) {

    let n = current + last;

    if(n % 2 === 0) data.push(n);

    last = current;
    current = n;

}

console.log(data);
console.log(data.reduce((acc, val) => acc + val, 0));
