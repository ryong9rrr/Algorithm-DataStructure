MAX = 101
LOG = 11
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5, 6],
    3: [1, 7, 8],
    4: [1, 9, 10, 11],
    5: [2],
    6: [2],
    7: [3],
    8: [3, 12, 13],
    9: [4, 14],
    10: [4, 15],
    11: [4],
    12: [8],
    13: [8, 16, 17],
    14: [9, 18],
    15: [10, 19],
    16: [13],
    17: [13, 20],
    18: [14],
    19: [15],
    20: [17]
}
n = 21
parent = [[0] * LOG for _ in range(MAX)]
c = [False] * MAX
d = [0] * MAX

#1. 모든 깊이 정보를 저장
def dfs(x:int, depth:int):
    c[x] = True
    d[x] = depth
    for node in graph[x]:
        if c[node]:
            continue
        parent[node][0] = x
        dfs(node, depth + 1)

#2. 부모관계설정
def setParent():
    dfs(0, 0)
    for j in range(1, LOG):
        for i in range(n):
            parent[i][j] = parent[parent[i][j - 1]][j - 1]


#3. 최소공통조상을 찾는 함수
def LCA(x:int, y:int):
    #y가 더 깊도록 설정
    if d[x] > d[y]:
        x, y = y, x

    #두 노드의 깊이를 동일하게 설정
    for i in range(LOG-1, -1, -1):
        if d[y] - d[x] >= (1 << i):
            y = parent[y][i]

    #부모가 같은 경우 반환
    if x == y:
        return x
    for i in range(LOG-1, -1, -1):
        if parent[x][i] != parent[y][i]:
            x = parent[x][i]
            y = parent[y][i]

    return parent[x][0]

setParent()
print(f"5와 7의 LCA: {LCA(5, 7)}")
print(f"15와 20의 LCA: {LCA(15, 20)}")
print(f"16과 17의 LCA: {LCA(16, 17)}")
print(f"10과 9의 LCA: {LCA(10, 9)}")
print(f"3과 17의 LCA: {LCA(3, 17)}")
"""
5와 7의 LCA: 0
15와 20의 LCA: 1
16과 17의 LCA: 13
10과 9의 LCA: 4
3과 17의 LCA: 3
"""