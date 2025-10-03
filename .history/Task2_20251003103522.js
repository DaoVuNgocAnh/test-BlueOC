function HarvestSeason(arr){
    let currentSum = arr[0], maxSum = arr[0]
    let currentLength = 1, bestLength = 1
    for(i>0; i <= arr.length - 1, i++) {
        if(currentSum + arr[i] >= arr[i]){
            currentSum += arr[i]
            currentLength+=1
        }

        else{
            currentSum = arr[i]
            currentLength =1
        }

        }
        if(currentSum>maxSum){
            maxSum = currentSum
            bestLength = currentLength
        }
    } 
    return bestLength
}