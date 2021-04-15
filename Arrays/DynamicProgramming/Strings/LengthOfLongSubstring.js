/*Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

// const lengthOfLongestSubstring = (characters) => {

//     let substringLength = 0

//     let newString = "" 

//     let currentCharacter = ""




//     for (let char of characters){
        

//         if(currentCharacter !== char){
//             newString += char

//         }
//         console.log("newString:", newString)
//         console.log("char:", char)
//        return newString.includes(char) ? newString.length : "stop"
//     }
//     create an empty string variable 
//     create variable that represents length of substring = 0
//     iterate over the string
//         find and hold non repeating characters 
//         place non repeating chars inside empty string
//     return substring length as output 
//     if "" return 0 


// }

// console.log(lengthOfLongestSubstring("abcabcbb"))

var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = "";
    console.log("before current", current)
    for (let i = 0; i < s.length; i++) {
        current = current.substring(current.indexOf(s[i]) + 1)        // argument (x-->)
        console.log("string index", s[i])
        console.log("during:", current)
        current += s[i];
        console.log("current index of ", current.indexOf(s[i]) + 1)
        console.log("after:", current)
        if (current.length > longest) {
            longest = current.length;
        }
    }
    
    return longest;
};
console.log(lengthOfLongestSubstring("abac"))
