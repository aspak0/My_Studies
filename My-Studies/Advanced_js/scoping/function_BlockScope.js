function test() {
  var a = 10;
  const b = 20;

  if (true) {
    const c = 3;
    var d = 50;
  }
  console.log(a, d); // var variable are function scope
  console.log(b, c); // let, const are Block level scope
}

test();
{
  {
    const ash = "Hello Ash";
  }
  console.log(ash); //ReferenceError: ash is not defined
}
