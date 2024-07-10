export const maxStockProfit2 = (prices: number[]): number => {
  let profit = 0;

  for (let day = 0; day < prices.length; day++) {
    const currentPrice = prices[day];
    const nextDayPrice = prices[day + 1];
    if (nextDayPrice > currentPrice) {
      profit += nextDayPrice - currentPrice;
    }
  }
  return profit;
};
