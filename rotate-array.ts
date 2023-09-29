function rotate(nums: number[], k: number): void {
  while (k > 0) {
    nums.splice(0, 0, nums.pop() as number);
    k--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2));
