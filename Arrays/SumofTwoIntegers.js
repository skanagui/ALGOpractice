/*Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5

var getSum = function(x, y) {
    while(y != 0) {
        let c = x & y;
               // 2 & 3 
             //c =   0010 & 0011 => 0010 => 2
             x = x ^ y;
             // x = 2 ^ 3     => 0001 = 1 
             console.log("x here", x)
             y = c << 1;
             console.log('y', y)
             // y=  2 << 1 => 0010 => 0100 = 4 
             //console.log("x", x)
    }
    return x;
};
console.log(getSum(2,3))
*/

const getSum = (a, b) => {
    let sum;
    while((a & b) !== 0){
        console.log("This is before sum:" ,sum)
        sum = (a & b) << 1;
              //2 //3 << 1 ===> 0100 = 4
        console.log("This is after sum:",sum)
        // console.log("This is before a:",sum)
        a = a ^ b;
         //0010 0011 ===> 0001 = 1
        // console.log("This is after a:",sum)
        b = sum;
    }
    return a ^ b;
          //1 //4
}
console.log(getSum(2,3))
// 0001 = 1
// 0100 = 4
// 0101

