function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = new Map();

  let status = false;

  for (let right = 0; right < nums.length; right++) {
    const el = nums[right];
    if (map.has(el) && Math.abs(map.get(el) - right) <= k) {
      status = true;
      break;
    }
    map.set(el, right);
  }

  return status;
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));

//                0 1 2 3 4 5
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
