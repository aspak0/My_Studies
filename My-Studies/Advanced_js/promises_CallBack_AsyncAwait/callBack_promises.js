//*  Using call back:)

const leftUser = false;
const watchingUser = false;

const instaReels = (callback, errorMessage) => {
  if (leftUser) {
    errorMessage({
      name: "User is left",
      text: "😊",
    });
  } else if (watchingUser) {
    errorMessage({
      name: "User is watching insta reels",
      text: "🧑‍💻",
    });
  } else {
    callback("Like and Share");
  }
};
instaReels(
  //inside callback function
  (text) => {
    console.log(`success: ${text}`);
  },
  (error) => {
    console.log(`${error.name} : ${error.text}`);
  }
);
/*------------------------------------------------------------------------------------------------ */
//*  Run this code using promise ;

const playGame = false;
const watchMovie = true;

const promiseTask = () => {
  return new Promise((resolve, reject) => {
    if (playGame) {
      reject({
        do: "i am playing",
        Name: "Cricket",
      });
    } else if (watchMovie) {
      reject({
        do: "i am watching movie",
        Name: "RRR",
      });
    } else {
      resolve("simply sleeping");
    }
  });
};

promiseTask()
  .then((message) => {
    console.log(`running: ${message}`);
  })
  .catch((error) => {
    console.log(`error: ${error.do} -> ${error.Name}`);
  });
