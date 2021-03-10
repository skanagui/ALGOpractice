/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6

*/

var runningSum = function(nums) {

    //const sumAll = []


    for(let i = 1; i < nums.length; i++){

       nums[i] = nums[i] + nums[i-1]

       //current number value, is equal to the current index of number starting at positon [1] plus the previous index value 

      // console.log(test)


    }





    return nums; 

}

console.log(runningSum([1,2,3,4]))

/*
var myarray = [5, 10, 3, 2];
var new_array = [];
myarray.reduce(function(a,b,i) { return new_array[i] = a+b; },0);
new_array // [5, 15, 18, 20]
*/