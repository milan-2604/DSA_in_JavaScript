// 🔸 Problem Statement:
// Design a stack that, in addition to push() and pop(), supports a function getMin() that returns the 
// minimum element in the stack in constant time (O(1)).
// 🔸 Required Methods:
// push(x)
// pop()
// top()
// getMin()
// All in O(1) time complexity.
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.top=null;
        this.length=0
        this.minStack = []//for storing current min value
    }
    isEmpty(){
        return this.length===0;
    }
    push(value){
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;

        if(this.minStack.length===0 || value<=this.minStack[this.minStack.length-1]){
            this.minStack.push(value);
        }
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        const removedNode = this.top;
        this.top=removedNode.next;
        this.length--;

        if(removedNode.value===this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
        return removedNode.value;
    }
    getMin(){
        if(this.minStack.length===0){
            console.log("empty");
        }else{
            console.log(this.minStack[this.minStack.length-1]);
        }
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
newStack.push(3);
newStack.push(5);
newStack.push(1);
newStack.push(45);
newStack.getMin()
newStack.print()