function findElement(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return ("YES");
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return "NO";
}

// Test cases
console.log(findElement([1, 3, 5, 7, 9], 5));  // YES
console.log(findElement([2, 4, 6, 8, 10], 1)); // NO
console.log(findElement([], 3));               // NO
console.log(findElement([1, 2, 2, 2, 3], 2));  // YES
console.log(findElement([1, 3, 5], 5));        // YES

// Optional: Simple unit test function
function testFindElement() {
    console.assert(findElement([1, 3, 5, 7, 9], 5) === "YES");
    console.assert(findElement([2, 4, 6, 8, 10], 1) === "NO");
    console.assert(findElement([], 3) === "NO");
    console.assert(findElement([1, 2, 2, 2, 3], 2) === "YES");
    console.assert(findElement([1, 3, 5], 4) === "NO");
    console.log("Tất cả test case pass!");
}

testFindElement();