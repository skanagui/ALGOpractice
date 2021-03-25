Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 
Constraints:

The input must be a binary string of length 32.

*/

const hamminWeight = (n) => {

    console.log("This is n in the beginning: ",n)
   
    let sum = 0

    while (n != 0){
        // console.log(sum)
        sum += n & 1 
                   //0001
        n = n >>> 1 
        console.log("This is the sum: ",sum)
        console.log("This is n: ",n)
    }
    return sum

  

}

// console.log(hamminWeight(00000000000000000000000000001011))
                                                //   0001 
 //console.log(hamminWeight(00000000000000000000000010000000))
 console.log(hamminWeight(11111111111111111111111111111101))