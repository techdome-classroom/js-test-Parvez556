
const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;
 
  // initialize dp as false and dp [0][0] is true  
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;

  // If pattern start with * it is match as an empty message
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // With the help of nested loops we fills the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  return dp[m][n];
};
  
  module.exports = decodeTheRing;