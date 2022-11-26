/*
Linked List is a Lenear datastructure.

*    2Layers 
 1-> DataPart (int,,char,float,double..etc any Data).
2-> ReferencePart (Storing Next Node address).

-Linked list includes a series of connected nodes.
-Each node pointers pointing the next node .
-The list of elements insert or remove without re-allocation the entire structure.

*LikedList supports three main operations
Insertion
Deletion
Search

* Imageviewer is linkedList application.

~ liked list first node is Head.

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  push(data) {
    if(!this.head) {this.size++; return this.head = new Node(data); }
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(data)
      this.size++;
    }
    print() {
      let current = this.head;
      while(current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

const list = new LinkedList();

console.log('Before size :', list.size);
list.push(10);
list.push(30)
list.push(40);
list.push(50);
console.log('After size :', list.size);

list.print();
