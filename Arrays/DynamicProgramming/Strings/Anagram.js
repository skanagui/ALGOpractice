/*
Check to see if two provided strings ate anagrams of each other. 
One string is an anagram of another if it uses the same characters in the same quantity. 
    // For these two always do: 
        Only consider chatacters, not spaces or punctuation. 
        Consider capital letters to be the same as lower case!
       --->  string.replace(/[^\w]/g, "").toLowerCase()
--- Examples:
    anagrams('rail safety', 'fairy tales') --> True 
    anagrams('RAIL! SAFETY','fairy tales') --> True
    anagrams('Hi there','Bye there') --> False
*/
//helper function
const cleanStringHelper = (string) => {
    // return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    console.log("testing", string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join(''))
}
const anagrams = (first, second) => {
   return cleanStringHelper(first) === cleanStringHelper(second)
}
console.log(anagrams('rail safety', 'faiiry tales'))
// console.log(anagrams('Hi there','Bye there'))