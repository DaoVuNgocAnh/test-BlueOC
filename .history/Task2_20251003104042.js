function HarvestSeason(arr) {
    let currentSum = arr[0], maxSum = arr[0];
    let currentLength = 1, bestLength = 1;

    // lưu vị trí để in ra đoạn con
    let start = 0, end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] >= arr[i]) {
            currentSum += arr[i];
            currentLength += 1;
        } else {
            currentSum = arr[i];
            currentLength = 1;
            tempStart = i;  // reset điểm bắt đầu mới
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            bestLength = currentLength;
            start = tempStart;
            end = i;
        }
    }

    // cắt đoạn con từ start → end
    let bestSubarray = arr.slice(start, end + 1);

    return {
        bestLength,
        maxSum,
        bestSubarray
    };
}

// Test
console.log(HarvestSeason([-2, 1, -3, 4, -1]));
// { bestLength: 1, maxSum: 4, bestSubarray: [4] }

console.log(HarvestSeason([-1, 2, 3, -2, 5, -3]));
// { bestLength: 4, maxSum: 8, bestSubarray: [2, 3, -2, 5] }

console.log(HarvestSeason([-5, -2, -3, -7]));
// { bestLength: 1, maxSum: -2, bestSubarray: [-2] }

console.log(HarvestSeason([1, 2, 3, 4]));
// { bestLength: 4, maxSum: 10, bestSubarray: [1, 2, 3, 4] }
