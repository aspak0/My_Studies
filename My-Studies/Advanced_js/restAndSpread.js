//Rest Operator Example :)

const restOperator = (a, b, c, ...rest) => {
  console.log(rest);
  return a + b + c + d;
};
const answer = restOperator(2, 5, 6, 7, 9, 3);
console.log(answer);
