class spreadSheet {
    constructor(){
        this.sheet = {};
    }
    setCell(cell,value){
        this.sheet[cell]=value;
    }
    resetCell(cell){
        delete this.sheet[cell];
    }
    getValue(formula){
        const [left,right] = formula.slice(1).split("+");
        const get = (s)=>{
            if(/^\d+$/.test(s)) return parseInt(s);
            return this.sheet[s] || 0;
        }
        return get(left) + get(right);
    }
}