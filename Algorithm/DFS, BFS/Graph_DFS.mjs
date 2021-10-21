import { Stack } from "./support/stack.mjs";
function Graph() {
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

Graph.prototype.print = function () {
  for (let v in this.edge) {
    let neighbors = this.edge[v];
    if (neighbors.length === 0) continue;

    process.stdout.write(`${v} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }
    console.log("");
  }
};

// 1. 재귀로 dfs
Graph.prototype.dfs = function (startVertex) {
  //1. 재귀로 할 때
  //this._dfsRecursiveVisit(startVertex);
  // 2. 스택으로 할 때
  this._dfsLoopVisit(startVertex);
};

Graph.prototype._dfsRecursiveVisit = function (v) {
  if (this.visited[v]) {
    return;
  }

  this.visited[v] = true;
  console.log(`visit ${v}`);

  let neighbors = this.edge[v];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};

// 2. stack으로 bfs
Graph.prototype._dfsLoopVisit = function (v) {
  let stack = new Stack();
  stack.push(v);

  while (!stack.isEmpty()) {
    let vertex = stack.pop();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit ${vertex}`);

    let neighbors = this.edge[vertex];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
};

// graph settings..
let graph = new Graph();
let nodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < nodes.length; i++) {
  graph.addVertex(nodes[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.dfs("A");
/*
visit A
visit B
visit E
visit I
visit F
visit C
visit G
visit D
visit H
*/
