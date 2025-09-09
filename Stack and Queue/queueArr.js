//using built in methods
class Queue {
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0;
    }
    enqueue(value){
        this.items.push(value);
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }else{
            return this.items.shift();
        }
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[0];
    }
    size(){
        return this.items.length;
    }
    print(){
        if(this.isEmpty()){
             console.log("Queue is empty");
        }else{
            console.log(this.items.join("->"));
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