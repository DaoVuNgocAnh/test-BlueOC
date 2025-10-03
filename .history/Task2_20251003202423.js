function HarvestSeason(N, arr) {
    let currentSum = arr[0], maxSum = arr[0];
    let currentLength = 1, bestLength = 1;
    let start = 0, bestStart = 0, bestEnd = 0;

    for (let i = 1; i < N; i++) {
        if (currentSum + arr[i] >= arr[i]) {
            currentSum += arr[i];
            currentLength += 1;
        } else {
            currentSum = arr[i];
            currentLength = 1;
            start = i;
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            bestLength = currentLength;
            bestStart = start;
            bestEnd = i;
        }
    }

    return [
    "Chuỗi con tốt nhất: " + arr.slice(bestStart, bestEnd + 1).join(", "),
    "Tổng: " + maxSum,
    "Độ dài: " + bestLength
    ];
}

// Test với dữ liệu trực tiếp
console.log("Kết quả:", HarvestSeason(5, [-2, 1, -3, 4, -1])); // 1
console.log("Kết quả:", HarvestSeason(6, [-1, 2, 3, -2, 5, -3])); 
console.log("Kết quả:", HarvestSeason(4, [-5, -2, -3, -7])); 
console.log("Kết quả:", HarvestSeason(4, [1, 2, 3, 4])); 
