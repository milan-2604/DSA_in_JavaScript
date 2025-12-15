class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.length=0;
    }
    isEmpty(){
        return this.length===0;
    }
    enqueue(value){
        const newNode = new Node(value);
      if(this.isEmpty()){
        this.front=newNode;
        this.rear=newNode;   
      }
      else{this.rear.next=newNode;
        this.rear=newNode;   
      }
      this.length++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const removedNode = this.front;
        this.front=removedNode.next;
        if(!this.front){
            this.rear=null;
        }
        this.length--;
        return removedNode.value;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }else{
            return this.front.value
        }
    }
     print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let result = "";
            let current = this.front;
            while (current) {
                result += current.value + (current.next ? " -> " : "");
                current = current.next;
            }
            console.log(result);
        }
    }
}
const newQueue = new Queue();
newQueue.enqueue(50);
newQueue.enqueue(100);
newQueue.enqueue(150);
newQueue.print();
newQueue.dequeue();
newQueue.print()