/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = []
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


const containsDuplicate = (nums) => {
    // We create a Set because the values should be unique
    let newSet = new Set(nums)
    console.log(newSet.size)
    console.log(nums.length)
    // For this conditional we're trying to check if the size of the Set is equal to the length of the array
    // If the array is larger that means that there're dublicates 
    // If they're equal to each other then it should return false or else it should return true
    if (newSet.size === nums.length){
        return false
    }
    return true
}
console.log(containsDuplicate([1,2,3,1,2,4,4]))
*/


// iterate through array 
//return boolean output 

const containsDuplicate = function(nums){

    let newSet = new Set()

    for (let i = 0; i < nums.length; i++){

        if (newSet.has(nums[i])){
            return true 
           
        }else{
            newSet.add(nums[i])
        }
        

        
    }
    return false

}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
