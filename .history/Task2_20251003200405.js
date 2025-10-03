const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function HarvestSeason(arr) {
    let currentSum = arr[0], maxSum = arr[0];
    let currentLength = 1, bestLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] >= arr[i]) {
            currentSum += arr[i];
            currentLength++;
        } else {
            currentSum = arr[i];
            currentLength = 1;
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            bestLength = currentLength;
        }
    }

    return bestLength;
}

console.log(HarvestSeason(arr));
