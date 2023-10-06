function minSubArrayLen(target: number, nums: number[]): number {
  let prevTotal = 0;
  let lowestRunCount = 0;
  for (let i = 0; i < nums.length; i++) {
    prevTotal += nums[i];
    lowestRunCount++;
    if (prevTotal >= target) {
      break;
    }
  }

  if (prevTotal < target) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    let currentTotal = prevTotal - nums[i - 1];
    if (currentTotal >= target) {
      prevTotal = currentTotal;
      lowestRunCount--;
    } else {
      prevTotal = currentTotal + nums[i + lowestRunCount - 1];
    }
  }

  return lowestRunCount;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
