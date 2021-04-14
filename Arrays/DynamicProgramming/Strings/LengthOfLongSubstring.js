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

const lengthOfLongestSubstring = (characters) => {




    for (let char of characters){
        console.log("this is char:", char)
    }
    // create an empty string variable 
    //create variable that represents length of substring = 0
    //iterate over the string
        //find and hold non repeating characters 
        //place non repeating chars inside empty string
    //return substring length as output 
    // if "" return 0 


}

console.log(lengthOfLongestSubstring("abcabcbb"))