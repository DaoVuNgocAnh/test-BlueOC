function HarvestSeason(arr){
    let currentSum = arr[0], maxSum = arr[0]
    let currentLength = 1, bestLength = 1
    for(let i = 1; i <= arr.length - 1; i++) {
        if(currentSum + arr[i] >= arr[i]){
            currentSum += arr[i]
            currentLength+=1
        }

        else{
            currentSum = arr[i]
            currentLength =1
        }
        if(currentSum>maxSum){
            maxSum = currentSum
            bestLength = currentLength
        }

    }
    return bestLength
        
} 

console.log(HarvestSeason([-2, 1, -3, 4, -1]));       // 1
console.log(HarvestSeason([-1, 2, 3, -2, 5, -3]));   // 4
console.log(HarvestSeason([-5, -2, -3, -7]));        // 1 (chọn số -2)
console.log(HarvestSeason([1, 2, 3, 4]));            // 4

    
