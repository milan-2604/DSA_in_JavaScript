class HashTable{
    constructor(size=5){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        const prime = 31;
        for(let i=0; i<Math.min(key.length,100); i++){
            let char = key[i];
            let value = char.charCodeAt(0);
            total=(total*prime + value)%this.keyMap.length;
        }
        return total;
    }
    set(key,value){
        let index = this._hash(key);//return an index for key
        if(!this.keyMap[index]){
            this.keyMap[index]=[];
        }
        //if key already exist update the value
        for(let i=0; i<this.keyMap[index].length;i++){//this.keyMap[index].length access the current bucket(array inside given index)
            if(this.keyMap[index][i][0]===key){
                this.keyMap[index][i][1]=value;// buckey looks like this [[key,value],[key,value],[key,value]] and hash table has multiple buckets
                return; //exit after updating
            }
        }
        //otherwise if key doesn't exit
        this.keyMap[index].push([key,value]);
    }
    get(key){//returning the value for the given key
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i=0; i<this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0]===key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    key(){
        const keyArr = [];
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!keyArr.includes(this.keyMap[i][j][0])){
                        keyArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keyArr;
    }
    value(){
        const valueArr = [];
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length;j++){
                    if(!valueArr.includes(this.keyMap[i][j][1])){
                        valueArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valueArr;
    }
}

const newTable = new HashTable();
newTable.set("milan","50");
newTable.set("rahul","100");
newTable.set("sunil","150");
newTable.set("om","200");
console.log(newTable.get("milan"));
console.log(newTable.get("rahul"));
console.log(newTable.get("sunil"));
console.log(newTable.get("om"));
console.log(newTable.key());
console.log(newTable.value());