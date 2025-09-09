class ManualStackArr{
    constructor(capacity=100){
        this.data= new Array(capacity);
        this.top=-1
    }
    push(value){
        if(this.top===this.data.length-1){
            return "Stack overflow";
        }else{
            this.top++;
            this.data[this.top]=value;
        }
    }
    pop(){
        if(this.top===-1){
            return "Stack underflow"
        }else{
            const value = this.data[this.top];
            this.top--;
            return value;
        }
    }
    peek(){
        if(this.top===-1){
            return "Stack underflow"
        }else{
            return this.data[this.top];
        }
    }
    isEmpty(){
        return this.top===-1;
    }
    print() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return;
    }

    let result = "";
    for (let i = 0; i <= this.top; i++) {
      result += this.data[i] + (i < this.top ? " <- " : "");
    }

    console.log(result);
  }
}

const newStack = new ManualStackArr();
newStack.push(50);
newStack.push(100);
newStack.push(150);
newStack.print();
newStack.pop();
newStack.print();
console.log(newStack.peek());
console.log(newStack.isEmpty())