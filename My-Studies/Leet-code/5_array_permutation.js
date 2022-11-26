/*      Build Array from Permutation  

 */

const arrPermutation = (num) => {
  let ans = [];
  for (let i = 0; i < num.length; i++) {
    ans.push(num[num[i]]);
  }
  return ans;
};
const result = arrPermutation([0, 2, 1, 5, 3, 4]);
console.log(result);
