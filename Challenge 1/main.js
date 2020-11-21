/* Challenge: Multiples of 3 and 5 */

const max = 1000;
const all = Array.from({ length: max - 1 }, (n, i) => i + 1).filter((num) => !(num % 3) || !(num % 5));

console.log(all);
