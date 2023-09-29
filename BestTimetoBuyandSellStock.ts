// function maxProfit(prices: number[]): number {
//   let max = 0;
//   for (let i = 0; i < prices.length; i++) {
//     const buyingDay = prices[i];
//     for (let j = i + 1; j < prices.length; j++) {
//       const sellingDay = prices[j];
//       let profit = sellingDay - buyingDay;
//       if (profit > max) {
//         max = profit;
//       }
//     }
//   }
//   return max;
// }
const maxProfit = (prices: number[]) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
let prices = [
  841, 636, 646, 45, 682, 90, 959, 900, 165, 460, 994, 396, 744, 959, 964, 732,
  165, 124, 604, 576, 478, 270, 871, 767, 557, 107, 623, 8, 313, 937, 478, 888,
  233, 603, 859, 923, 563, 760, 496, 61, 976, 448, 174, 587, 693, 134, 113, 222,
  881, 396, 805, 813, 350, 590, 529, 981, 385, 881, 17, 263, 305, 744, 729, 805,
  721, 693, 736, 520, 34, 251, 18, 836, 543, 232, 531, 577, 49, 722, 388, 278,
  232, 392, 773, 85, 753, 461, 270, 707, 931, 52, 542, 573, 970, 498, 362, 977,
  473, 941, 800, 73, 979, 606, 371, 592, 797, 414, 92, 411, 244, 283, 112, 680,
];
