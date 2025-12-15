class ManualQueue{
    constructor(capacity=10){
        this.data = new Array(capacity);
        this.capacity=capacity;
        this.front=0;
        this.rear=0;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    isFull(){
        return this.size===this.capacity;
    }
    enqueue(value){
        if(this.isFull()){
            return undefined;
        }
        this.data[this.rear]=value;
        this.rear++;
        this.size++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }else{
            const removed = this.data[this.front];
            this.front++;
            this.size--;
            return removed;
        }
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        else{
            return this.data[this.front];
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("empty");
        }else{
            let result = "";
            for(let i=this.front; i<this.rear; i++){
                result+= this.data[i] +(i<this.rear-1?" -> " : "");
            }
            console.log(result);
        }
    }
}
const newQueue = new ManualQueue();
newQueue.enqueue(50);
newQueue.enqueue(100);
newQueue.enqueue(150);
newQueue.print();
newQueue.dequeue();
newQueue.print()