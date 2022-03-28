# Index tree

- Segment Tree와 더불어 "구간 합" 문제를 효과적으로 해결할 수 있는 자료구조

## Fenwick Tree

- Segment Tree와 성능이 비슷하지만 구현이 더 간단하다.

- 비트연산을 활용한다.

**1. 특정한 숫자의 마지막 bit를 구하기**

```c
7 = 00000000 / 00000000 / 00000000 / 00000111

-7 -> 0과 1의 보수를 취하고 마지막 bit에 +1 -> 11111111 / 11111111 / 11111111 / 11111001

따라서 7의 마지막 bit = 7 & -7

#include <iostream>

using namespace std;

int main(void){
	for(int i = 0; i <= 16; i++){
		cout << i << "의 마지막 비트: " << (i & -i) << "\n";
	}
	return 0;
}

0의 마지막 비트: 0
1의 마지막 비트: 1
2의 마지막 비트: 2
3의 마지막 비트: 1
4의 마지막 비트: 4
5의 마지막 비트: 1
6의 마지막 비트: 2
7의 마지막 비트: 1
8의 마지막 비트: 8
9의 마지막 비트: 1
10의 마지막 비트: 2
11의 마지막 비트: 1
12의 마지막 비트: 4
13의 마지막 비트: 1
14의 마지막 비트: 2
15의 마지막 비트: 1
16의 마지막 비트: 16
```

**2. 마지막 비트를 이용하여 트리 구조 생성**

0을 제외하고 1부터 16까지의 숫자가 있을 때, 각 숫자의 마지막 비트는 "저장하고 있는 값들의 개수"라고 할 수 있다.

- Segment Tree는 데이터의 개수보다 많은 메모리공간을 필요로 했지만 인덱스 트리에서는 추가적인 메모리공간을 필요로 하지 않는다.

```
  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16

 +-------------------- 1 ~ 16 -------------------------+
 +------- 1 ~ 8 --------+
 +- 1 ~ 4 -+             +-- 9 ~ 12 --+
 + 1~2 +    + 5~6 +      + 9~10 +       + 13~14 +
 1     3     5      7     9      11      13      15
```

**3. 숫자를 변경할 때**

- 따라서 숫자 3을 변경한다고 가정했을 때 4번의 연산만 수행하면 되므로 데이터의 개수가 n일 때 O(log2(n))의 시간복잡도를 가진다.

```c
void update(int i, int dif){
	while(i <= NUMBER){
		tree[i] += dif;
		i += (i & -i);
	}
}
```

**4. 구간 합 구하기**

```c
int sum(int i){
	int result = 0;
	while(i > 0){
		result += tree[i];
		i -= (i & -i);
	}
	return result;
}

int getSection(int start, int end){
	return sum(end) - sum(start - 1);
}
```

sum(16) = index 14( = 27) + index 12( = 42) + index 8( = 36) 로 수행됨 (index가 2의 제곱으로 줄어듬)

# C

```c
#include <iostream>
#define NUMBER 16

using namespace std;

int tree[NUMBER];

int sum(int i){
	int result = 0;
	while(i > 0){
		result += tree[i];
		i -= (i & -i);
	}
	return result;
}

void update(int i, int dif){
	while(i <= NUMBER){
		tree[i] += dif;
		i += (i & -i);
	}
}

int getSection(int start, int end){
	return sum(end) - sum(start - 1);
}

int main(void){
	for(int i = 1; i <= NUMBER; i++){
		update(i, i);
	}

	cout << getSection(1, 16) << "\n";
	// 136
}
```

# python

```python
n = 16
tree = [0] * (n + 1)

def sum(i:int)->int:
    result = 0
    while i > 0:
        result += tree[i]
        i -= (i & -i)
    return result

def update(i:int, dif:int):
    while i <= n:
        tree[i] += dif
        i += (i & -i)

def get_section(start:int, end:int)->int:
    res = sum(end) - sum(start - 1)
    return res

#tree init
for i in range(1, n+1):
    update(i, i)

print(f"1부터 16까지의 구간 합: {get_section(1, 16)}")
print(tree)
# [0, 1, 3, 3, 10, 5, 11, 7, 36, 9, 19, 11, 42, 13, 27, 15, 136]
```
