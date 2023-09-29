function removeDuplicates(nums: number[]): number {
  let curr: number | undefined;
  let currCount = 0;
  let i = 0;
  while (i < nums.length) {
    if (curr !== nums[i]) {
      curr = nums[i];
      currCount = 1;
      i++;
    } else {
      currCount += 1;
      if (currCount > 2) {
        nums.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  return nums.length;
}
removeDuplicates([1, 1, 1, 2, 2, 3]);
