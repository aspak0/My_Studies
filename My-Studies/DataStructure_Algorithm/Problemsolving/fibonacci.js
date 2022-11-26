// 0,1=1,  0,1,1=2,  0,1,1,2=3  0,1,1,2,3=5
/*
0 = fib(0);  //1st Term
1 = fib(1); //2nd Term
fib(n) = fib(n-1) + fib(n-2);
fib(2) = fib(1) + fib(0); // 1 + 0 = 1;
*/
//* Without recursion :

const fibonacci = (n) => {
    if(n === 0 || n === 1) {
        return n;
    }
    let prev = 0;
    let curr = 1;
    for(let i = 2; i <= n; i++){
        swap = prev + curr;
        prev = curr;
        curr = swap;
    }
    return curr;
}
const result = fibonacci(6);
console.log(result);

//* with Recursion :

const fib = (n) => {
    if(n === 0 || n=== 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
const ans = fib(6);
console.log('Fibonacci:',ans);