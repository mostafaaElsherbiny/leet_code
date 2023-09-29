const maxProfitPartTwo = (prices: number[]) => {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
let pricesPartTow = [7, 1, 5, 3, 6, 4];
console.log(maxProfitPartTwo(pricesPartTow));