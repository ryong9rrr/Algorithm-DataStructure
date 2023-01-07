def zero_one_knapsack(capacity, cargo):
    pack = [[0] * (capacity + 1) for _ in range(len(cargo) + 1)]

    for i in range(1, len(cargo) + 1):
				v, w = cargo[i - 1]
        for c in range(1, capacity + 1):
            prev = pack[i - 1][c]
            if w <= c:
                pack[i][c] = max(prev, v + pack[i - 1][c - w])
                continue
            pack[i][c] = prev

    return pack[-1][-1]

capacity = 15
cargo = [
    (4, 12),
    (2, 1),
    (10, 4),
    (1, 1),
    (2, 2),
]

print(zero_one_knapsack(capacity, cargo)) # 17.333...