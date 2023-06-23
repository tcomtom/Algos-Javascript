/**
 * @param {number[][]} accounts
 * @return {number}
 * accounts = [[1,2,3], [3,2,1], [4,2,1]]
 */
var maximumWealth = function(accounts) {
    let maxSoFar = 0;
    
    for(let i = 0;i < accounts.length; i++) {
      let currMax = 0;
      for(let k = 0;k < accounts[i].length; k++) {
        // console.log(accounts[i][k])
        currMax = currMax + accounts[i][k]
        if(currMax > maxSoFar) {
          maxSoFar = currMax
        }
      }
    }
    return maxSoFar;
};

console.log(maximumWealth([[1,2,3], [3,2,1]]))
console.log(maximumWealth([[2,8,7], [7,1,3], [1,9,5]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))

// Time complexity: O(n x m)
// Space complexity: O(1)
