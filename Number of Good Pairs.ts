function numIdenticalPairs(nums: number[]): number {
  let count = 0;
  let map: { [key: string | number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    if (map[first]) {
      count += map[first];

      map[first] = map[first] + 1;
    } else {
      map[first] = 1;
    }
  }
  return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
