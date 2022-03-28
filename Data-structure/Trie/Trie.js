class Node {
  constructor(value = "", stored = false) {
    this.value = value;
    this.children = new Map();
    this.stored = stored;
    this.searchedCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
    // 검색된 단어 데이터 업데이트
    currentNode.stored = true;
    currentNode.searchedCount += 1;
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  autoComplete(string) {
    if (typeof string !== "string") throw new Error("인자가 문자열이 아니에요");
    if (!string.trim()) return null;

    const result = new Map();

    function dfs(node) {
      if (!node) return;
      const { value, children, stored, searchedCount } = node;
      if (stored) result.set(value, searchedCount);
      [...children.keys()].forEach((char) => dfs(children.get(char)));
      return;
    }

    let node = this.root;
    for (const char of string) {
      const { children } = node;
      if (!children.get(char)) return null;
      node = children.get(char);
    }

    dfs(node);

    // 검색이 많이된 순서대로 반환
    return [...result].sort((a, b) => b[1] - a[1]);
  }
}
