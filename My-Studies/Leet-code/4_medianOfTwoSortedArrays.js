const medianOfArr = (arr1, arr2) => {
  let concat = arr1.concat(arr2);
  concat = concat.sort((a, b) => {
    return a - b;
  });
  //console.log(concat);
  let length = concat.length;

  if (length % 2 === 1) {
    //length is odd
    return concat[length / 2 - 0.5];
  } else {
    return (concat[length / 2] + concat[length / 2 - 1]) / 2;
  }
};

arr1 = [1, 4, 7, 9];
arr2 = [2, 5, 8];
const result = medianOfArr(arr1, arr2);
console.log(result);