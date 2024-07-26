const getTotalIsles = function (grid) {
// write your code here

//We check our grid id grid is 0 and length of grid ===0 we simply return 0.
  if (grid == null || grid.length === 0) {
    return 0;
}

let numberOfIslands = 0;

function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
        return;
    }

    grid[i][j] = 'W'; // Mark this cell as visited

    // Check all four directions (up, down, left, right)
    dfs(grid, i - 1, j); // up case
    dfs(grid, i + 1, j); // down case
    dfs(grid, i, j - 1); // left case
    dfs(grid, i, j + 1); // right case
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 'L') {
            numberOfIslands++;
            dfs(grid, i, j);
        }
    }
}

return numberOfIslands;
}



module.exports = getTotalIsles;