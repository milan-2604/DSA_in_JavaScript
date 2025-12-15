// Problem:
// You are given an array prices where prices[i] is the price of a stock on day i. You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.

// Goal:
// Find the maximum profit you can achieve. If you cannot achieve any profit, return 0.

// Example:
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

const maxProfitFun = (arr)=>{
    let minPrice = arr[0];
    let maxProfit = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i]<minPrice){
            minPrice=arr[i];
        }
        else{
            let potentialProfit = arr[i]-minPrice;
            maxProfit=Math.max(maxProfit,potentialProfit);
        }
    }
    return maxProfit;
}

console.log(maxProfitFun([7,1,5,3,6,4]))