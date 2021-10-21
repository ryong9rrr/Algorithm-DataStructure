const graph = {
  1: [2, 3, 4],
  2: [5, 6],
  3: [7],
  4: [7, 8],
  5: [9],
};
const n = 9;
let visited = Array(n + 1).fill(false);
let result = [];

function dfs(node) {
  if (visited[node]) {
    return;
  }
  visited[node] = true;
  result.push(node);
  if (graph[node]) graph[node].forEach((v) => dfs(v));
}

dfs(1);
console.log(result);
// [1, 2, 5, 9, 6, 3, 7, 4, 8]
