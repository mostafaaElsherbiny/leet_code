function findMaxAverage(nums: number[], k: number): number {
  let left = 0;

  let sum = 0;

  let max = Number.NEGATIVE_INFINITY;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (right >= k - 1) {
      max = Math.max(max, sum);

      sum -= nums[left++];
    }
  }

  return max / k;
}

console.log(findMaxAverage([0], 1));
