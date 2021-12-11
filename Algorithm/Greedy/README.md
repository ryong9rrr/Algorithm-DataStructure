# Greedy (탐욕법)

- 당장 눈 앞에 보이는 최적해를 선택한다.

- 항상 최적의 결과를 보장하지는 않는다.

- `kruskal`알고리즘을 비롯한 많은 문제들에 연관되어있는 알고리즘

## ex) 거스름돈 문제

<img width="50%" src="./greedy.jpg" />

## Fractional Knapsack Problem

분할 가능한 배낭 문제

> 15kg 가방에 4달러짜리 12kg의 짐, 2달러짜리 1kg의 짐, 10달러짜리 4kg의 짐, 1달러짜리 1kg의 짐, 2달러짜리 2kg의 짐을 담아서 낼 수 있는 최대이익은? (단, 짐은 1kg 단위로 쪼갤 수 있고 하나씩만 사용가능하다.)

```python
def fractional_knapsack(cargo:list, capacity:int)->int:
    pack = []
    for price, c in cargo:
        pack.append((price / c, price, c))
    # 단가가 높은 순서대로
    pack.sort(reverse=True)

    total_value:float = 0
    for v, price, c in pack:
        if capacity - c >= 0:
            capacity -= c
            total_value += price
        else:
            fraction = capacity / c
            total_value += price * fraction
            break
    return total_value

cargo = [
    # (단가, kg)
    (4, 12),
    (2, 1),
    (10, 4),
    (1, 1),
    (2, 2)
]

print(fractional_knapsack(cargo, 15)) # 17.333333333333332
```

# Greedy와 DP

위 거스름돈 문제와 분할가능한 배낭문제는 그리디 알고리즘으로 풀 수 있는 조건이지만 만약 거스름돈 문제에서 80원 단위의 동전이 하나 생긴다면 그리디 알고리즘으로 풀 수 없는 다이나믹 프로그래밍 문제가 된다. 또한 분할가능한 배낭문제에서도 짐을 쪼갤 수 없다면 그리디 알고리즘으로 풀 수 없는 다이나믹 프로그래밍 문제가 된다. 문제의 요구조건을 잘 생각하며 그리디 문제인지 DP문제인지 방향을 잘 정하자.
