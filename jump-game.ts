// function canJump(nums: number[]): boolean {
//   let goal = nums.length - 1;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i + nums[i] >= goal) {
//       goal = i;
//     }
//   }
//   return goal == 0;
// }
function canJump(nums: number[]): boolean {
  const n = nums.length;
  // `dp[i]` stores whether we can reach the last index starting from index `i`.
  const dp = new Array<boolean>(n).fill(false);
  dp[n - 1] = true; // We can always reach the last index from the last index itself.
  // Starting from the second-last index, we fill up the `dp` array.
  for (let i = n - 2; i >= 0; i--) {
    // `maxJump` is the maximum index we can jump to from index `i`.
    const maxJump = Math.min(i + nums[i], n - 1);
    // Starting from the current index, we try to reach the last index.
    for (let j = i + 1; j <= maxJump; j++) {
      if (dp[j]) {
        dp[i] = true; // If we can reach the last index from index `j`, then we can reach it from index `i` too.
        break;
      }
    }
  }
  return dp[0]; // We can reach the last index from the first index if and only if `dp[0]` is `true`.
}
