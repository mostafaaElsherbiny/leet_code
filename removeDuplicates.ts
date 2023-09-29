function removeDuplicates(nums: number[]): any {
  nums.sort((n1, n2) => n1 - n2);

  nums = [...new Set(nums)];

  return nums.length;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
