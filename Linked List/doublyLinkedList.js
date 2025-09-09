class DoublyNode{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    //push() adding new node at the end of the list
    push(value){
        const newNode= new DoublyNode(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
    }

    //pop() deleting the last element
    pop(){
        if(!this.head){
            return undefined;
        }
        const removedNode = this.tail;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        } else{
            
            this.tail=removedNode.prev;
            this.tail.next=null;
            removedNode.prev=null;

        }
        this.length--;
    return removedNode;
    }

    //unshift() adding item at the front of the list
    unshift(value){
        const newNode = new DoublyNode(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{newNode.next = this.head;
        this.head.prev = newNode;
        this.head=newNode;
       }
        this.length++;
    }

    //shift() deleting item from front
    shift(){
        if(!this.head){
            return undefined;
        }
        const removedNode = this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=removedNode.next;
            this.head.prev=null;
            removedNode.next=null;
        }
        this.length--;
        return removedNode;
    }

    //print() printing the list
    print(){
        if(!this.head){
            console.log("list is empty");
            return undefined;
        }
        let current = this.head;
        let result="";
        while(current){
            result+=current.value + " <-> ";
            current=current.next;
        }
        result+="null";
        console.log(result);
    }
}

const list = new DoublyLinkedList();
list.push(50);
list.push(100);
list.push(150);
list.pop()
list.print();