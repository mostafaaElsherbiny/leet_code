function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element == val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}
