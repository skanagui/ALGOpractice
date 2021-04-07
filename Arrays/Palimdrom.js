/*
const isPalindrome = (num) => {
    //Reverse the integer 
    let reversed = 0
    let original = num
    while (num != 0){
        reversed = reversed * 10 + num % 10
        console.log("reversed", reversed)
        The second argument for parseInt() states it's radix. 
        Since we're going by decimal that's why I chose 10
        
        num = parseInt(num / 10, 10)
        console.log("num", num)
     }
     //After reversing, we need to check if the number is still the same
     //return boolean value if the number is or isn't the same 
    return reversed === original
 }
 console.log(isPalindrome(1000000000000001))
*/











const isPalimdrome =(num) => {

    //reverse the integer 
    // check if number is the same as original 
    // return boolean true or false ===

    let newNum = num.toString().split("").reverse().join("")      //toString() & parstInt()  are opposites and equal 
    console.log("new", newNum)
    let parsedNumber = parseInt(newNum)
        return parsedNumber === num  





}

console.log("this one",isPalimdrome(1000000000000000001))
console.log("321 num",isPalimdrome(123))


