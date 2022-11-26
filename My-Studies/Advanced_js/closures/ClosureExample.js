let ex = 5;
const outerFunc = (i) => {
  let outerVar = 10;
  const innerFunc = () => {
    let total = ex + i + outerVar;
    console.log(`Total ${total}`);
  };
  return innerFunc;
};
let result = outerFunc(7);
console.log(result);
result();
