export const maxStockProfit = (prices: number[]): number => {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (const element of prices) {
    if (element < minPrice) {
      minPrice = element;
    } else if (element - minPrice > maxProfit) {
      maxProfit = element - minPrice;
    }
  }
  return maxProfit;
};
