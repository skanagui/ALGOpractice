/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
*/

const PlusMinus = (arr) => {

    let n = arr.length
    let neg = []
    let pos = []
    let zer = []

    for(let i = 0; i < arr.length; i++){

        if (arr[i]< 0 ){

            neg.push(arr[i])

        } if (arr[i] > 0){

            pos.push(arr[i])

         }if  (arr[i] ===0){
                
            zer.push(arr[i]) 
        }          
    }
            

    console.log("neg", neg.length/n)
    console.log("pos", pos.length/n)
    console.log("zer", zer.length/n )




  // count the array length ==> N 
  // create empty hash for key value pairs 
  // iterate over the array 
    // if arr [i] < 0 ==>
    // if arr[i] > 0 ==>
    // if arr[i] = 0 ==>
  // grab arr[i]  and divide by N 
  //return 3 values 






}

console.log(PlusMinus([-1, 2, -3, 0, 4, 8]))