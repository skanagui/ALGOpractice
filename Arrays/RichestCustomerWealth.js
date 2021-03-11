/*You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

 //(proposed steps)
//create variable for largest output 
//iterate over account array using [i] for index
//create a nested loop for integer values 
//function for sum for each account and compare (possibly Math.max)
//  variable for current output for iteration once inside the first loop 
//return largest output 
*/

const maximumWealth = (accounts)=> {
    let bigSum = 0
    
    for(let i = 0; i < accounts.length; i++){
       let subArraySum = 0
       for( let j = 0; j < accounts[i].length; j++){
        subArraySum += accounts[i][j]
       }
        bigSum = Math.max(bigSum,subArraySum)
    // console.log(accounts[i])
    //console.log(subArraySum)
    }

    return bigSum
};


console.log(maximumWealth([[1,5],[7,3],[3,5]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))
console.log(maximumWealth([[1,2,3],[3,2,1]]))