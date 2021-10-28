# Search Algorithm (탐색 알고리즘)

어떤 값을 찾을 때, 데이터가 정렬되어있다면 효과적으로 값을 찾을 수 있다.

## Linear Search

- 단순하게 브루트포스로 탐색

- 데이터가 "정렬되어 있지 않을 때" 앞에서 부터 순차적으로 데이터를 찾는다.

- 따라서 이 경우, n개의 data가 있을 때 최악의 시간복잡도는 O(N)이 된다.

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

## Binary Search

이분 탐색은 **재귀**를 이용하여 범위를 반으로 계속해서 줄여나간다. 따라서 시간복잡도는 밑이 2인 O(logN)이다.

> 10만개의 데이터 중에서 원하는 값을 찾기 위해서는 최대 단 16번의 연산만 수행하면 된다. (2^17 > 100,000 이므로)

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
