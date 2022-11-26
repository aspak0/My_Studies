console.log(`SumHoist(1, 2) => ${sumHoist(1, 2)}`);
console.log(`SumHoist(3, 4) => ${sumHoist(3, 4)}`);

const sumHoist = (a, b) => a + b; // Arrow function are not Hoisted

// Normal function are Hoisted
correctHoist(5, 3);
function correctHoist(a, b) {
  console.log(a + b);
}
