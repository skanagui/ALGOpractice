/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

var twoSum = function(nums, target) {
    // var output = []
    //for loop to iterate through array 
    // indices must add up to target 
    // return array of index of nums array 

    let output = {} //{0: 2, 1: 7, 2: 11, 3: 15}
    
    for(let i = 0; i < nums.length; i++){
        //console.log("nums[I]",[nums[i]])
        //console.log("i", i)
        console.log("OUTPUT", output)
        if(output[nums[i]]>= 0){
            
         //console.log("here", [output[nums[i]], i])   
            return [output[nums[i]], i]


        
            
        }
        output[target - nums[i]] = i 
        //9      //2       //1
        
    }
    
};

console.log(twoSum([2,7,11,15], 9))