/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/


var climbStairs = function(n) {    
    let prev = 0;
    let cur = 1;
    let temp;
    //console.log(temp)
    for (let i = 0; i < n; i++) {
        temp = prev;   //0,1,2,3,4
        prev = cur;
        console.log(cur)
        cur += temp; 
        console.log("temp", temp)
        console.log("prev", prev)
        console.log("cur 38 after", cur)
        
    }
    
    //return cur;
};
console.log(climbStairs(5))