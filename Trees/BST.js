class Node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class Bst {
    constructor(){
        this.root=null;
    }
    add(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root=newNode;
            return;
        }
       let current = this.root;
      let previous = null;
       while(current){
        if(newNode.value<current.value){
            previous=current;
            current=current.left;
        }else{
            previous=current
            current=current.right;
        }
       }
       //previous at last
       if(newNode.value<previous.value){
        previous.left=newNode;
       }else{
        previous.right=newNode;
       }
    }
    contains(value){
        let current = this.root;
      
        while(current){
              if(value===current.value){
            return true;
        }
           else if(value<current.value){
                current=current.left;
            }else{
                current=current.right;
            }
        }
        return false;
    }
}

const bst = new Bst();
bst.add(5);
bst.add(8);
bst.add(7);
bst.add(9);
bst.add(3);
bst.add(1);
bst.add(2);
console.log(bst.contains(3))