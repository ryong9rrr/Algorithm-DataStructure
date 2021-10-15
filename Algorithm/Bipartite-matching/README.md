# Bipartite-matching(이분매칭)

- 네트워크 플로우 알고리즘과 연계되는 개념으로, A 집단이 B 집단을 선택하는 방법에 대한 알고리즘

- 한 집단이 다른 한 집단을 선택할 때, 효과적으로 매칭하는 경우(최대로 매칭시킬 수 있는 경우)를 찾는다.

## DFS를 이용한 알고리즘

```
사람 1은 A, B, C를 선택할 수 있다.

사람 2는 A를 선택할 수 있다.

사람 3은 B를 선택할 수 있다.

이 때, 가장 효과적으로 매칭시킬 수 있는 경우는?
```

<img width="30%" src="./img/bipartite1.jpg" />

- 1의 가능한 선택지인 A에 매칭시킨다.

<img width="30%" src="./img/bipartite2.jpg" />

- 2의 가능한 선택지인 A에 매칭시킨다.
- 2의 가능한 선택지는 A밖에 없고, 이미 1이 A에 점유를 하고 있으므로 1의 가능한 선택지가 더 있는지 찾은 후 1을 B에 매칭시킨다.

<img width="30%" src="./img/bipartite3.jpg" />

- 3의 가능한 선택지인 B에 매칭시킨다.
- 3의 가능한 선택지는 B밖에 없고, 이미 1이 B에 점유를 하고 있으므로 1의 가능한 선택지가 더 있는지 찾은 후 1을 C에 매칭시킨다.

<img width="30%" src="./img/bipartite4.jpg" />

- 매칭완료

## python

```python
# if match, return true
def dfs(x:int, c:list, d:list)->bool:
    for node in graph[x]:
        if c[node]:
            continue
        c[node] = True
        if d[node] == 0 or dfs(node, c, d):
            d[node] = x
            return True
    return False

n = 3
graph = {
    1: [1, 2, 3],
    2: [1],
    3: [2]
}
d = [0] * (n + 1)
count = 0
for i in range(1, n+1):
    # initialize list c
    c = [False] * (n + 1)
    if dfs(i, c, d):
        count += 1
print(f"{count} 개의 매칭이 이루어졌습니다.")

for i in range(1, n+1):
    if d[i] != 0:
        print(f"{d[i]} -> {i}")

"""
3 개의 매칭이 이루어졌습니다.
2 -> 1
3 -> 2
1 -> 3
"""
```
