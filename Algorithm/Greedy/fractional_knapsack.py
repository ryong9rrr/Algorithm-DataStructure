def fractical_knapsack(capacity, cargo):
    pack = []
    for value, weight in cargo:
        pack.append((value / weight, value, weight))
    pack.sort(reverse=True)

    total_value = 0
    for unit_price, value, weight in pack:
        if weight > capacity:
            total_value += unit_price * capacity
            return total_value
        capacity -= weight
        total_value += value
    return total_value

capacity = 15
cargo = [
    (4, 12),
    (2, 1),
    (10, 4),
    (1, 1),
    (2, 2),
]

print(fractical_knapsack(capacity, cargo)) # 17.333...