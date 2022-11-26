//*   Master in Recursion
/*
const recursion = () => {
  recursion();
  // Stack Overflow ;
};
recursion();
*/
// recursion condition method :)

let number = 0;
const condition = () => {
  if (number > 3) {
    return "Print";
  }
  number++;
  console.log(number);
  condition();
};
condition();

