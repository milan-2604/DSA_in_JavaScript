const arrayChunks = (arr, chunkSize) => {
    let chunkArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkArr.push(arr.slice(i, i + chunkSize));
        console.log(`-----[${arr.slice(i,i+chunkSize)}`)
    }
    return chunkArr;
};

console.log(arrayChunks([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 3));
