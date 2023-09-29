//two sum problem
function twoSum(values: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < values.length; i++) {
    let complement = target - values[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(values[i], i);
  }
  return [];
}

console.log(twoSum([3, 3], 6));
