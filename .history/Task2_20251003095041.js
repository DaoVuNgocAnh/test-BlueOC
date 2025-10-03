function findElement(a, b){
    let left = 0, right = arr[a] - 1
    while(left<=right){
        mid = Math.floor((left + right) / 2)
        if (arr[mid] == b){
            return "YES"
        }
        else if (arr[mid] < b){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return "NO"
}

console.log(findElement([1,3,5,7,9], 9)