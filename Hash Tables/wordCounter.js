const wordCounter = (str,word)=>{
    let counter = {};
    const arr = str.toLowerCase().split(" ");
    word=word.toLowerCase();
    for(let i of arr){
        counter[i] ? counter[i]+=1 : counter[i]=1;
    }
    return counter[word] || 0;
}
console.log(wordCounter("hello Name what naMe are doing name","name"));

