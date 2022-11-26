/*
enqueue(e) -> Add an element to the queue;
dequeue() -> Remove the oldest element from the queue;  
peek() -> Get the value of element in front without removing queue;
isEmpty() -> Check queue is empty;
size() -> Get the number of size in queue;
print() -> visualize the element in queue;
*/

class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);  // First in
    }
    dequeue(){
        return this.items.shift();  // First Out
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return mull;
    }
    size(){
        this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty());