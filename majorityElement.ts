// function majorityElement(nums: number[]): number {
//   let majorityElement: number = -1;
//   let newMap: { [key: number]: number } = {};
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if (newMap.hasOwnProperty(element)) {
//       newMap[element] += 1;
//     } else {
//       newMap[element] = 1;
//     }
//   }
//   for (const key in newMap) {
//     const element = newMap[key];
//     if (element >= nums.length / 2 && element > majorityElement) {
//       majorityElement = parseInt(key);
//     }
//   }
//   return majorityElement;
// }
function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate ?? -1;
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
