//Given number 1 to n
//if number is divisible by 3 print Fizz
//if number is divisible by 5 print Buzz
//if by both print FizzBuzz
//else print number


const fizzBuzz = (num)=>{
    for(let i=1; i<=num; i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz");
        }
        else if(i%3===0){
            console.log("Fizz");
        }
        else if(i%5===0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(20);