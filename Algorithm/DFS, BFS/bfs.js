const graph = {
  1: [2, 3, 4],
  2: [5, 6],
  3: [7],
  4: [7, 8],
  5: [9],
};

const n = 9;

function bfs(node) {
  let visited = Array(n + 1).fill(false);
  let result = [];
  let q = [];
  q.push(node);
  visited[node] = true;
  while (q.length) {
    const x = q.shift();
    result.push(x);
    if (graph[x]) {
      graph[x].forEach((v) => {
        if (!visited[v]) {
          q.push(v);
          visited[v] = true;
        }
      });
    }
  }
  return result;
}

// console.log(bfs(1));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
