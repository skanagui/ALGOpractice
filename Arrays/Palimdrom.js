const isPalimdrome =(num) => {

    //reverse the integer 
    // check if number is the same as original 
    // return boolean true or false ===

    let newNum = num.toString().split("").reverse().join("")      //toString() & parstInt()  are opposites and equal 
    console.log("new", newNum)
    let parsedNumber = parseInt(newNum)
        return parsedNumber === num  





}

console.log(isPalimdrome(1001))
console.log(isPalimdrome(123))