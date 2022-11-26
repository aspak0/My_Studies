//*   O(n)
// here is single for loop iterating input(Array or input data) 'n' number of times
const arrO = ["a", "b", "c"];

for (let i = 0; i < arrO.length; i++) {
  console.log(arrO[i]);
}

/*---------------------------------------------------------------------*/
//* O(n+m)
// here is two forloops one 'n'  Another 'm'

const arrO1 = [1, 2, 3, 4];
const arrO2 = ["A", "B", "C"];

for (let i = 0; i < arrO1.length; i++) {
  console.log(arrO1[i]);
}
for (let j = 0; j < arrO2.length; j++) {
  console.log(arrO2[j]);
}

/*---------------------------------------------------------------------*/
//* O(n * m)
// here is two forloops nested loops  so this is n * m

const arr1 = [1, 2, 3, 4];
const arr2 = ["A", "B", "C"];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    console.log(arr1[i] + arr2[j]);
  }
}

/*---------------------------------------------------------------------*/
//* O(n^2) = n squre
// every single time we loop through again each times
//one time n[i] one time n[j]

const arr3 = ["A", "B", "C"];

for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    console.log(arr3[i] + arr3[j]);
  }
}

/*---------------------------------------------------------------------*/
//* O(4n^2) = 4 nsqure 2
//printing the output 4n^2  times
const arr4 = ["A", "B", "C"];

for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4.length; j++) {
    console.log(arr4[i] + arr4[j]);
    console.log(arr4[i] + arr4[j]);
    console.log(arr4[i] + arr4[j]);
    console.log(arr4[i] + arr4[j]);
    console.log(arr4[i] + arr4[j]);
  }
}

/*---------------------------------------------------------------------*/
//* O(n^2 + n)

//Here first loop is 'n^2 times  and second loop is n times
//so this is O(n^2 + n)

const arr5 = ["A", "s", "h"];

for (let i = 0; i < arr5.length; i++) {
  for (let j = 0; j < arr5.length; j++) {
    console.log(arr5[i] + arr5[j]);
  }
}
for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i]);
}

/*---------------------------------------------------------------------*/
/*   Space Complexity */

//* O(1)
// constant space complexity ;

const arr6 = ["A", "s", "h"];

for (let i = 0; i < arr6.length; i++) {
  console.log(arr6[i]);
}
/*---------------------------------------------------------------------*/

//* O(n)
//Create new array and shift data into new array ;

const arr7 = ["A", "s", "h"];
const out = [];

for (let i = 0; i < arr7.length; i++) {
  out[i] = arr7[i];
}
/*---------------------------------------------------------------------*/

//* O(n^2)
// Output will be running square times;

const arr8 = ["A", "s", "h"];
const out1 = [];

for (let i = 0; i < arr8.length; i++) {
  out1[i] = [];
  for (let j = 0; j < arr8.length; j++) {
    out[i][j] = arr8[i];
  }
}
/*---------------------------------------------------------------------*/