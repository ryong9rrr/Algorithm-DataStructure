# 이진 검색

**이진탐색트리(Binary-Search-Tree)와 이진검색(Binary-Search)의 개념적 차이**

- 이진탐색트리(BST)는 정렬된 구조를 저장하고 탐색하는 "자료구조"이고, 이진검색은 정렬된 배열에서 값을 찾아내는 "알고리즘" 그 자체를 지칭.

- 보통 투포인터나 재귀를 통해 구현을 한다.

## 선형 검색(Linear Search)

데이터가 정렬되어있지 않다면 브루트포스로 탐색을 할 수 밖에 없다. n개의 data가 있을 때 최악의 시간복잡도는 O(N)

### C언어로 구현한 브루트포스 탐색

> [8, 3, 4, 5, 1, 9, 6, 7, 2, 0] 에서 7이 위치한 곳은?

```c
#include <iostream>
#define NUMBER 10

using namespace std;

int a[] = {8, 3, 4, 5, 1, 9, 6, 7, 2, 0};
int target = 7;

int main(void){
	for(int i = 0; i < NUMBER; i++){
		if(a[i] == target){
			cout << i + 1 << " at searched.";
		}
	}
}
// 8 at searched.
```

## 이진검색

이진 검색은 **정렬된 데이터에서** 범위를 반으로 계속해서 줄여나간다. 따라서 시간복잡도는 밑이 2인 O(logN)이다.

> 10만개의 데이터 중에서 원하는 값을 찾기 위해서는 최대 단 16번의 연산만 수행하면 된다. (2^17 > 100,000 이므로)

### C언어로 구현한 이진 탐색

```C
#include <iostream>
#define NUMBER 12

using namespace std;

int a[] = {1, 3, 5, 7, 9, 11, 14, 15, 18, 19, 25, 28};
int target = 7;

int search(int start, int end, int target){
	if(start > end) return -1;
	int mid = (start + end) / 2;
	if(a[mid] == target) return mid;
	else if(a[mid] > target) return search(start, mid - 1, target);
	else return search(mid + 1, end, target);
}

int main(void){
	int result = search(0, NUMBER - 1, target);
	if(result != -1)
		cout << result + 1 << " at searched.";
}
// 4 at searched.
```
