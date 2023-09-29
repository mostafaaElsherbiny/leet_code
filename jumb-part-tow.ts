function jump(nums: number[]): number {
  let max = 0;
  let end = 0;
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === end) {
      end = max;
      step++;
    }
  }
  return step;
}
console.log(jump([2, 3, 1, 1, 4]));
