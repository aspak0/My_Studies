const createQueue = () => {
  const queue = [];
  // FiFo( First in First Out);
  return {
    //add or Enqueue;
    enqueu(item) {
      queue.unshift(item);
    },
    // remove or Dequeue;
    dequeue() {
      return queue.pop();
    },
    //peek;
    peek() {
      return queue[queue.length - 1];
    },
    //Length;
    get length() {
      return queue.length;
    },
    //isEmpty;
    isEmpty() {
      return queue.length === 0;
    },
  };
};
const q = createQueue();
q.enqueu("Hello,"); // adding item
q.enqueu("Aspak");
q.enqueu("How are you ?");
q.dequeue(); //removing item
q.dequeue();
console.log(q.peek()); //return the item in the array
console.log(q.isEmpty()); //check empty or not
