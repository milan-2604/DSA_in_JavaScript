class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value);
        if(!this.top){
            this.top=newNode;
        }else{
            newNode.next=this.top;
            this.top=newNode;
        }
        this.length++;
    }
    pop() {
        if (!this.top) {
            return undefined;
        }
        const removedNode = this.top;
        this.top = removedNode.next;
        removedNode.next = null;
        this.length--;
        return removedNode.value;
    }
    isEmpty(){
        return this.top===null;
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.top.value;
    }
    print(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null;
        }
        let current = this.top;
        let result ='';
        while(current){
            result+=current.value + (current.next ? " <- " : "");
            current=current.next;
        }
        console.log(result);
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