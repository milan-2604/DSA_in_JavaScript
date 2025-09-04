class MyArray{
   constructor(){
    this.length = 0;
    this.data = {};
   }

   push(item){
    this.data[this.length]=item;
    this.length++ ;
    return this.length;
   }

   get(index){
    return this.data[index];
   }
   
   pop(){
    const del = this.data[this.length-1];
    delete this.data[this.length - 1];
    this.length--;
    return del;
   }

   shift(){
    const firstElement = this.data[0];
    
    for(let i=0; i<this.length -1; i++){
      this.data[i]=this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
    return firstElement;
   }

   removeAtIndex(index){
      const indexRemoved = this.data[index];
      for(let i=index ; i<this.length -1; i++){
         this.data[i]=this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length --;
      return indexRemoved;
   }
}

const myNewArr = new MyArray();
myNewArr.push("apple");
myNewArr.push("mango");
myNewArr.push("orange");
myNewArr.push("banana");
console.log(myNewArr);
// console.log(myNewArr.get(3));
// console.log(myNewArr.pop());
// console.log(myNewArr);
// console.log(myNewArr.shift());
// console.log(myNewArr);
// console.log(myNewArr.length);
// console.log(myNewArr.get(1));
// console.log(myNewArr.removeAtIndex(1));
// console.log(myNewArr);
