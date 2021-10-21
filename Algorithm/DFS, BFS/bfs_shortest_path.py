from collections import deque, defaultdict
INF = int(1e9)
graph = {
  "A": ["B", "C", "D"],
  "B": ["E", "F"],
  "C": ["G"],
  "D": ["G", "H"],
  "E": ["I"],
}

# 모든 노드를 key로 만들어 type으로 초기화하는 함수
def graph_init(graph:dict, type=0)->dict:
    new_graph = defaultdict(int)
    for k in graph.keys():
        if new_graph[k]: continue
        else: new_graph[k] = type
        c = 0
        while c < len(graph[k]):
            node = graph[k][c]
            if new_graph[node]:
                continue
            else:
                new_graph[node] = type
            c += 1
    return new_graph

def _bfs_shortest_path(node)->dict:
    q = deque()
    q.append(node)

    distance = graph_init(graph, 0)
    pre_visit = graph_init(graph, None)
    visited = graph_init(graph, False)

    while q:
        v = q.popleft()
        visited[v] = True
        #print(f"visit {v}", end=" ")
        try:
            for node in graph[v]:
                if not visited[node]:
                    distance[node] = distance[v] + 1
                    pre_visit[node] = v
                    q.append(node)
        except KeyError:
            pass

    return distance, pre_visit

def shortest_path(start, end):

  distance:dict = _bfs_shortest_path(start)[0]
  print(f"distance : {distance[end]}")
  pre_visit:dict = _bfs_shortest_path(start)[1]

  stack = deque()
  node = end
  while node != None:
    stack.append(node)
    node = pre_visit[node]

  while stack:
    print(f"{stack.pop()}", end=" ")

shortest_path("A", "I")
# distance : 3
# A B E I