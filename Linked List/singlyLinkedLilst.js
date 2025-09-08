//Node class -> item of the list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//LinkedList class -> manages list
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
                current=current.next; //incrementing current until it reaches last node
            }
            current.next = newNode; //assigning address of newly created node to the last node
        }
        this.length++; //incrementing length as new node added
    }

    //pop() deleting last element from the list
    pop(){
        if(!this.head){
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

    //unshift() adding item in front of the list
    unshift(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head=newNode;
        this.length++;
    }

    //shift() deleting first element from front of the list
    shift(){
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current.value;
    }

    //getFirst() returning the first item value of the list
    getFirst(){
        if(!this.head){
            return undefined;
        }
        return this.head.value;
    }
    
    //getLast() returning last item value of the list
    getLast(){
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        while(current.next){
            current=current.next;
        }
        return current.value
    }

    //get() get element by index
    get(index){
        if(!this.head){
            return undefined;
        }
        if(index>=this.length|| index<0){
            return false;
        }
        let current=this.head;
        let currentIndex =0;
        while(currentIndex!=index){
            current=current.next;
            currentIndex++;
        }
        return current.value;
    }

    //set(index,value) set value at specific index without altering LinkedList
    set(index,value){
        if(index>=this.length || index<0){
            return false;
        }
        let current = this.head;
        let currentIndex = 0;
        while(currentIndex!=index){
            current = current.next;
            currentIndex++;
        }
        current.value=value;
        return true;
    }

    //insert(index,value) inserting a newNode at desired index
    insert(index,value){
       
        if(index>this.length || index<0){
            return false;
        }
        if(index===0){
            this.unshift(value);
            return true;
        }
        if(index===this.length){
            this.push(value)
            return true;
        }
         const newNode = new Node(value);
        let current=this.head;
        let currentIndex=0;
        let previous = null;
        while(currentIndex!=index){
            previous=current;
            current=current.next;
            currentIndex++;
        }
        previous.next=newNode;
        newNode.next=current;
        this.length++;
        return true;
    }

    //size() total no. of nodes
    size(){
        return this.length;
    }

    //clear() delete all nodes
    clear(){
        this.head=null;
        this.length=0;
    }

    //remove(index) remove node from specific index
    remove(index){
        if(index>=this.length || index<0){
            return false;
        }
        if(index===0){
           return this.shift();
        }
        if(index=== this.length-1){
           return this.pop();
        }
        let current= this.head;
        let previous= null;
        let currentIndex = 0;
        while(currentIndex!=index){
            previous=current;
            current=current.next;
            currentIndex++;
        }
        previous.next=current.next;
        this.length--;
        return current.value;
    }

    //toArray() copying linked list values in an array
    toArray(){
        const arr = [];
        if(!this.head){
            return arr ;
        }
        
        let current=this.head;
        while(current){
            arr.push(current.value);
            current=current.next;
        }
        return arr;
    }

    //reverse() reversing the refrence of each node
    reverse(){
        if(!this.head){
            return undefined;
        }
        let current=this.head;
        let previous=null; 
        
        while(current!=null){
            let next = current.next;
            current.next = previous
            previous=current;
            current=next;
        }        
        this.head=previous;                                        
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
// newList.print()
// newList.unshift(40)
// newList.pop();
// newList.print();
// newList.shift();
// newList.print()
// console.log(newList.getLast())
// console.log(newList.get(1))
// console.log(newList.toArray())
newList.reverse();
newList.print();