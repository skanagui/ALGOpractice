function maxProduct(nums) {
    let maxTillIndex = [nums[0]]
    let minTillIndex = [nums[0]]
    let product = nums[0]
    for(let i = 1; i < nums.length; i++){
        let num = nums[i]
        maxTillIndex[i] = Math.max(
        num, 
        num * maxTillIndex[i -1], 
        num * minTillIndex[i -1]
        )
        minTillIndex[i] = Math.min(
            num, 
            num * maxTillIndex[i -1], 
            num * minTillIndex[i -1]
        )
        product = Math.max(product, maxTillIndex[i] )
        console.log("min: ", minTillIndex)
        console.log("max: ",maxTillIndex)
        console.log("product: ", product)
    }
    return product
}
console.log(maxProduct([2,3,-2,-4]))