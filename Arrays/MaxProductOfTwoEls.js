/*Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:
               i     j
Input: nums = [3,4,5,2]
Output: 12     0 1,2 3
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:
                      
Input: nums = [[1,5],[4,5]]
            
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]  3-1 x 7-1 = 12
2 x 6
Output: 12
 
// Create a variable "maxNumber" set to 0
// iterate over the nums array

// return maxNumber
[3,4,5,2]
*/

const maxProduct = (nums) => {
    let iMax = 0
    let jMax = 0;

    for (let num of nums) {
                        //0       ,     //0   //3
        iMax = Math.max(iMax, Math.min(jMax, num)); 
        //0             //0   //2 or 3
        jMax = Math.max(jMax, num);  //5
        
      
    }   
    // console.log(iMax) 
    // console.log(jMax)
    return (iMax - 1) * (jMax - 1);
  };
  console.log(maxProduct([7,3]))
  console.log(maxProduct([3,4,5,2]))
  console.log(maxProduct([1,5,4,5]))

