function findLargestThree(nums: number[]) {
  if (nums.length < 3) return -1;
  let left = 0;
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  let limit = 3;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (right >= limit - 1) {
      max = Math.max(sum, max);

      sum -= nums[left++];
    }
  }

  return max;
}

console.log(findLargestThree([1, 2, 3]));
