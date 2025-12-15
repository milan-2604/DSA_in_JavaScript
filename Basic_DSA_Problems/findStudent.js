// make a program to find a student in an array

const arr = ["Milan","Rahul","Sunil","Ashu","Suraj","Anurag"];

const findStudent = (studentArray,studentName)=>{
    for(let i=0; i<studentArray.length; i++){
        if(studentArray[i]===studentName){
            console.log(`Found ${studentName} at Index ${i} in Student array`);
            break;
        }
    }
}

findStudent(arr,"Rahul");