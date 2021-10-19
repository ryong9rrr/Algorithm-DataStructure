# 네트워크 플로우

- "최대 유량 문제"

- 한 정점에서 다른 하나의 정점으로까지 도달해야 할 때, 흘려보낼 수 있는 최대 유량을 구한다.

- BFS를 이용하는 **에드몬드 카프 알고리즘**이 일반적.

# Edmonds-Karp Algorithm

- 일반적 BFS를 통해 모든 경로를 찾았을 때, **음의 유량**을 고려하여 새로운 경로를 찾아내는 알고리즘.

- 따라서 가능한 보다 많은 경우의 수를 탐색하여 최적의 해를 찾아내는 것

- 시간복잡도 O(V x E)

## python

```python
from collections import deque

n = 6
INF = int(1e9)
# (vertex, capacity)
graph = {
    1: [(2, 12), (4, 11)],
    2: [(3, 6), (4, 5), (5, 5), (6, 9)],
    3: [(6, 8)],
    4: [(5, 9)],
    5: [(3, 3), (6, 4)],
    6: []
}

nodes = dict()
c = [None] + [[0]*100 for _ in range(n)]
f = [None] + [[0]*100 for _ in range(n)]

# manufacturing data...
for i, info in enumerate(graph.values()):
    node_list = []
    node = i + 1
    for vertex, capacity in info:
        node_list.append(vertex)
        c[node][vertex] = capacity
    nodes[node] = node_list

# {1: [2, 4], 2: [3, 4, 5, 6], 3: [6], 4: [5], 5: [3, 6], 6: []} // nodes
# [None, [0, 0, 12, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0... // capacity

def max_flow(start:int, end:int, n:int)->int:
    result = 0
    while True:
        d = [-1] * (n + 1)
        q = deque()
        q.append(start)
        while q:
            x = q.popleft()
            for node in nodes[x]:
                if c[x][node] - f[x][node] > 0 and d[node] == -1:
                    q.append(node)
                    d[node] = x
                    if node == end:
                        break
        if d[end] == -1:
            break
        flow = INF
        i = end
        while i != start:
            flow = min(flow, c[d[i]][i] - f[d[i]][i])
            i = d[i]

        i = end
        while i != start:
            f[d[i]][i] += flow
            f[i][d[i]] -= flow
            i = d[i]

        result += flow

    return result

print(max_flow(1, 6, n))
# 19
```

# Hopcroft-Karf

> 관련 포스팅
>
> - https://blog.naver.com/na_qa/221478734069
> - https://gazelle-and-cs.tistory.com/35
