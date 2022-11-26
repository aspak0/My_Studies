const createStack = () => {
  const stack = [];

  return {
    // add item to stack;
    push(item) {
      stack.push(item);
    },
    //remove item from stack;
    pop() {
      if (stack.length === 0) {
        return undefined;
      }
      return stack.pop();
    },
    // peek
    peek() {
      if (stack.length === 0) {
        return undefined;
      }
      return stack[stack.length - 1];
    },
    //size
    get length() {
      return stack.length;
    },
    //isEmpty
    isEmpty() {
      return stack.length === 0;
    },
  };
};
const stk = createStack();

stk.push("hello"); //adding items to stack;
stk.push("Ash");
stk.push("it's Me");

stk.pop(); //removing items from stack;
stk.pop();

console.log(stk.peek()); //print peeked items

console.log(stk.length);  // print the lenth of stack
