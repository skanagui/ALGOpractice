/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.



const missingNumber = (nums) => {
    let sort = nums.sort()
    
    for(let i = 0; i <= nums.length; i++){
        
        console.log("this is the num at this index", nums[i])
        console.log("this is the index", i)
        
        if  (nums[i] !== i){
            return i
        }
    }
    
    
    
    
    return missingNumber;
    
    
    
}
//console.log(missingNumber([3,0,1]))
//console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))
*/

const missingNumber = (nums) => {
    // let sort = nums.sort()
    // console.log("This is the sorted array: ", sort)
    // for (let i = 0; i <= sort.length; i++){
    //     if (nums[i] !== i){
    //         return i
    //     }
    // }
        let sum = nums.length;
        console.log("length:", sum)
        for (let i = 0; i < nums.length; i++) {
            console.log("This is i: ",i)
            console.log("This is nums[i]: ",nums[i])
                                    //0
            sum = (i - nums[i]) + sum;
            /*Round 1: 
                i =0 and nums[i] =3 and sum=3
                    (0 - 3) + 3 = 0
            Round 2:
                i = 1 and nums[i]=0 and sum=0
                (1-0) + 0 = 1
            ROund3: 
                i = 2, nums[i]=1 and sum=1
                (2-1) + 1 = 2 
            */
            console.log("This is the sum: ", sum)
        }
        return sum;
};
// console.log(missingNumber([3,0,1]))
// console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
// console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))