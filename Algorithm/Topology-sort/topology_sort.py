from collections import deque

graph = {
    1: [2, 5],
    2: [3],
    3: [4],
    4: [6],
    5: [6],
    6: [7],
    7: []
}
n = len(graph)

def topology_sort(n:int, graph:dict)->list:
    INF = 987654321
    result = []
    degree = [INF] + [0 for _ in range(n)]
    q = deque()

    # insert degree info in list
    for nodes in graph.values():
        for node in nodes:
            degree[node] += 1

    for i in range(1, n+1):
        if degree[i] == 0:
            q.append(i)

    while q:
        x = q.popleft()
        result.append(x)
        for node in graph[x]:
            degree[node] -= 1
            if degree[node] == 0:
                q.append(node)

    return result

print(topology_sort(n, graph))
# [1, 2, 5, 3, 4, 6, 7]