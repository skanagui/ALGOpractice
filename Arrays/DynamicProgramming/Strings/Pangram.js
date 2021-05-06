/*

1832. Check if the Sentence Is Pangram
Easy

136

4

Add to List

Share
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
const isPangram = (sentence) =>{

    let lowerSentence = sentence.toLowerCase().split("")
    
    console.log(sentence)
    if (lowerSentence === "abcdefghijklmnopqrstuvwxyz"){

        return true 


    }else 

    return false 



    //turn string into array --> .split()
    //if array contains letters A-Z --> true 
    // else false 


}
*/

var checkIfPangram = function(sentence) {
    
    const set = new Set();
    for(let i=0;i<sentence.length;i++){
        set.add(sentence[i])
    }
    
    return set.size===26 ? true : false;
};


console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))
console.log(isPangram("thequickbrownfoxjumpsoverthelazydog"))