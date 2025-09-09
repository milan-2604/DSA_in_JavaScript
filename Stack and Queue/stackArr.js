class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    print(){
        console.log(this.items.join(' <- '));
    }
}

const newStack = new Stack();
newStack.push(50);
newStack.push(100);
newStack.push(150);
newStack.print();
newStack.pop();
newStack.print();
console.log(newStack.peek());
console.log(newStack.isEmpty())