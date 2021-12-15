def find_parent(parent:list, x:int)->int:
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent:list, a:int, b:int):
    x = find_parent(parent, a)
    y = find_parent(parent, b)
    if x < y:
        parent[y] = x
    else:
        parent[x] = y

V, E = 7, 9
graph = {
    # (연결노드, 비용)
    1: [(2, 29), (5, 75)],
    2: [(3, 35), (6, 34)],
    3: [(4, 7)],
    4: [(6, 23), (7, 13)],
    5: [(6, 53)],
    6: [(7, 25)],
    7: []
}

parent = [0] * (V + 1)
edges = []
for v in range(1, V + 1):
    # parent 테이블 초기화
    parent[v] = v
    # 간선 테이블 초기화
    for w, cost in graph[v]:
        edges.append((cost, v, w))
# 비용이 싼 순으로 정렬
edges.sort()

total = 0
for cost, a, b in edges:
    if find_parent(parent, a) != find_parent(parent, b):
        union_parent(parent, a, b)
        total += cost

print(total) # 159