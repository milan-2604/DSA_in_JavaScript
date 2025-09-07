//Node class -> item of the list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//LinkedList clsss -> manages list
class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //push() adding new node at the end of the list
    push(value){
        const newNode = new Node(value); //creating new node
        if(!this.head){
            this.head = newNode; //if lsit is empty we'll put new node in head
        }
        else{
            let current = this.head; //if head exists lets put current on the first node
            while(current.next){
                current=current.next //incrementing current until it reaches last node
            }
            current.next = newNode; //assigning address of newly created node to the last node
        }
        this.length++; //incrementing length as new node added
    }

    //pop() deleting last element from the list
    pop(){
        if(!this.head){
            console.log("list is empty nothing to pop");
            return undefined;
        }

        let current = this.head;
        let previous = null;
        if(!current.next){//if only one elements exists
            const value = current.value;
            this.head = null;
            this.length--;
            return value;
        }
        while(current.next){
            previous=current;
            current=current.next;
        }
        previous.next=null;
        this.length--;
        return current.value;
    }

    //print() printing the linked list
    print(){
        if(!this.head){
            console.log("List is empty")
            return;
        }
       
            let current = this.head;
            let result = "";
            while(current){
                result+=current.value + " -> ";
                current= current.next;
            }
            result+="null";
            console.log(result);
        
    }
    
}

const newList = new LinkedList();
newList.push(50);
newList.push(100);
newList.push(150);
newList.print()
newList.pop();
newList.print();
