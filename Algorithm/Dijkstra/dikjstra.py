###############  여러가지 다익스트라 bfs  ################

"""
<다익스트라>
# 노드, 간선의 개수
# 시작, 도착노드
# 노드정보... (노드1에서 노드2로 가는 비용은 2 라는 뜻)

6 11
3 6
1 2 2
1 3 5
1 4 1
2 3 3
2 4 2
3 2 3
3 6 5
4 3 3
4 5 1
5 3 1
5 6 2
"""
import sys
import heapq
from collections import defaultdict, deque
input = lambda : sys.stdin.readline().rstrip()

n, m = map(int, input().split())
startNode, endNode = map(int, input().split())
graph = defaultdict(list)
for _ in range(m):
    u, v, w = map(int, input().split())
    graph[u].append((v, w))

def dikjstra(startNode:int, endNode:int)->int:
    dist = defaultdict(int)
    heap = [(0, startNode)]

    while heap:
        cost, node = heapq.heappop(heap)
        if node == endNode:
            return cost
        if node not in dist:
            dist[node] = cost
            for v, w in graph[node]:
                if v in dist:
                    continue
                alt = cost + w
                heapq.heappush(heap, (alt, v))
    #해당 노드에 도달할 수 없다면 -1
    return -1

print(dikjstra(startNode, endNode)) # 5


#######################################################

import heapq

INF = int(1e9)

# node num
n = 6
# edge num
m = 11

# node info
graph = [
    [],
    [(2, 2), (3, 5), (4, 1)],
    [(1, 2), (3, 3), (4, 2)],
    [(1, 5), (2, 3), (4, 3), (5, 1), (6, 5)],
    [(1, 1), (2, 2), (3, 3), (5, 1)],
    [(3, 1), (4, 1), (6, 2)],
    [(3, 5), (5, 2)]
]

# check visited
visited = [False] * (n + 1)

# distance
distance = [INF] * (n + 1)

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    # if q is not empty
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for node, d in graph[now]:
            cost = dist + d
            if cost < distance[node]:
                distance[node] = cost
                heapq.heappush(q, (cost, node))

dijkstra(1)

print(distance[1:])
# [0, 2, 3, 1, 2, 4]