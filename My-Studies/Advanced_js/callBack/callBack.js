function Decor(callBack) {
  setTimeout(() => {
    console.log("============");
    console.log("************");
    console.log("............");
    callBack();
  }, 2000);
}

function execute() {
  Decor(() => {
    console.log("hello, Ash");
  });
  Decor(() => {
    console.log("End");
  });
}
execute();
