let x = prompt("Enter x", 0)
let y = prompt("Enter y", 0)

console.log(`x is ${x}\n y is ${y}`)

const swap = (x, y) => {
  return [y, x];
}

[x, y] = swap(x, y);

console.log(`x is ${x}\n y is ${y}`)
