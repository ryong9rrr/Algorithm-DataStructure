"""
여러 사람이 모였을 때, 생일이 같은 사람이 2명 이상 존재할 확률
1. 23명만 모여도 50%가 넘는다.
2. 57명이 모였을 때는 99%에 육박한다.

> 일반적인 생각과 달리, 충돌은 생각보다 쉽게 일어난다.
"""
import random

TRIALS = 100000     # 시행횟수: 10만번
same_birthdays = 0  # 생일이 같은 실험의 수

# 10만번 진행
for _ in range(TRIALS):
    birthdays = []
    # 23명이 모였을 때, 생일이 같을 경우 same_birthdays += 1
    for i in range(23):
        birthday = random.randint(1, 365)
        if birthday in birthdays:
            same_birthdays += 1
            break
        birthdays.append(birthday)

# 10만번의 실험 중 생일이 같은 실험의 확률
print(f"{same_birthdays / TRIALS * 100}%") # 50%를 넘어섬.