function findElement(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return "YES";
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return "NO";
}

// Test cases
console.log(findElement([1, 3, 5, 7, 9], 5));  
console.log(findElement([2, 4, 6, 8, 10], 1)); 
console.log(findElement([], 3));               
console.log(findElement([1, 2, 2, 2, 3], 2));  
console.log(findElement([1, 3, 5], 5));        

