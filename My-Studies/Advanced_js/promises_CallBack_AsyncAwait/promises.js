//* Normal promises;

let proms = new Promise((execute, error) => {
  let num = 10 + 10;
  if (num === 20) {
    execute("Execute");
  } else {
    error("Error");
  }
});

proms
  .then((text) => {
    console.log(`This code in then: ${text}`);
  })
  .catch((text) => {
    console.log(`This code in catch: ${text}`);
  });

/*-----------------------------------------------------------------------------------------------*/
//* run all the promises in simple way ;

const video1 = new Promise((resolve, reject) => {
  resolve("video 1 Recorded");
});

const video2 = new Promise((resolve, reject) => {
  resolve("video 2 recorded");
});

const video3 = new Promise((resolve, reject) => {
  resolve("video 3 Recorded");
});
//Promise.all  // print all value
Promise.all([video1, video2, video3]).then((message) => {
  console.log(message);
});

//Promise.race // print single value
Promise.race([video1, video2, video3]).then((text) => {
  console.log(text);
});
