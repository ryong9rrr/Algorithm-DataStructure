# 📃 기초 알고리즘

📃 공부한 것을 적어놓은 필기노트... 📃

> 참고한 자료들...
>
> - [동빈나(나동빈 님) 실전알고리즘 강좌(유튜브)](https://www.youtube.com/watch?v=qQ5iLNjpxSk&list=PLRx0vPvlEmdDHxCvAQS1_6XV4deOwfVrz&index=1)

---

## 📖 목차

- <a href="#intro">알고리즘이란?</a>

- <a href="#sort">정렬</a>
  - <a href="#sort-selection">선택 정렬</a>
  - <a href="#sort-bubble">버블 정렬</a>
  - <a href="#sort-insertion">삽입 정렬</a>
  - <a href="#sort-quick">퀵 정렬</a>
  - 병합 정렬
  - 힙 정렬
  - 계수 정렬

---

<h1 id="intro">알고리즘이란?</h1>

1. 입력, 출력, 유한성, 명백성, 효과성을 만족해야 한다.

   - 입력과 출력이 있다.
   - 유한한 단계를 거친 후 종료된다.
   - 모든 명령은 명백히 제시되어야 한다.
   - 모든 명령은 실행히 가능한 형태이다.

2. 분석을 통해 좋고 나쁨을 평가할 수 있다.

3. 기초 프로그래밍과 자료구조를 공부한 이후에 배우면 좋다.

4. 알고리즘은 논리이며 수학이고 실질적인 개발에 적용되는 기초적인 아이디어이다.

---

<h1 id="sort">정렬</h1>

일반적으로 알고리즘을 공부할 때 가장 먼저 풀어보는 문제, 여러가지 방법(알고리즘)들이 있고 효율성 차이가 극명하게 보이기 때문.

> 다음 숫자들을 오름차순으로 정렬하시오... </br>`1 10 5 8 7 6 4 3 2 9`

---

<h2 id="sort-selection">선택 정렬</h2>

> "가장 작은 것을 맨 앞으로 보내면 어떨까?"

`✔1 10 5 8 7 6 4 3 2 9` : 배열을 한번 순회하고 보니 현재 값(1)이 제일 작으므로 그냥 둔다.

`1 ✔2 5 8 7 6 4 3 ✔10 9` : 배열을 한번 순회하고 보니 2가 제일 작으므로 현재 값(10)과 자리를 교체한다.

`1 2 ✔3 8 7 6 4 ✔5 10 9` : 마찬가지로 반복...

`1 2 3 ✔4 7 6 ✔8 5 10 9` . . .

```c++
#include <stdio.h>

int main(void){
	int i, j, min, index, temp;
	int array[10] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};
	for(i=0; i<10; i++){
		min = array[i];
		for(j=i; j<10; j++){
			if(min > array[j]){
				min = array[j];
				index = j;
			}
		}
        //swap
		temp = array[i];
		array[i] = array[index];
		array[index] = temp;
	}

	for(i=0; i<10; i++){
		printf("%d ", array[i]);
	}

	return 0;
}
```

<strong>Big O Notation : N^2</strong>

선택정렬의 경우 배열의 길이 만큼 계속해서 반복문을 수행한다.

이 경우 첫 번째 연산은 10개의 데이터를, 두 번째 연산은 9개의 데이터... `10 + 9 + 8 ... + 1 = N * (N+1)/2`와 같이 등차수열을 이룸.

빅오표기법에 따라 상수항을 제외하면 `N^2`로 최악의 경우 `O(N^2)`의 시간복잡도를 가진다.

---

<h2 id="sort-bubble">버블 정렬</h2>

> 바로 옆에 있는 숫자를 비교하고 교환하자.

`✔1 ✔10 5 8 7 6 4 3 2 9` : 1과 10을 비교하고 1이 더 작으므로 그냥 둔다.

`1 ✔10 ✔5 8 7 6 4 3 2 9` : 10과 5를 비교하고, 10이 더 크므로 교환한다. 👉 `1 ✔5 ✔10 8 7 6 4 3 2 9`

`1 5 ✔10 ✔8 7 6 4 3 2 9` : 10과 8을 비교하고, 10이 더 크므로 교환한다. 👉 `1 5 ✔8 ✔10 7 6 4 3 2 9` ...

`1 5 8 7 6 4 3 2 9 ✔10` : 따라서 마지막에는 가장 큰 숫자 10이 맨 끝에 위치하게 된다.

```c++
#include <stdio.h>

int main(void){

	int i, j, temp;

	int array[10] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};

	for(i=0; i<10; i++){
		for(j=0; j<9-i; j++){
			if(array[j] > array[j+1]){
				temp = array[j+1];
				array[j+1] = array[j];
				array[j] = temp;
			}
		}
	}

	for(i=0; i<10; i++){
		printf("%d ", array[i]);
	}

	return 0;
}
```

<strong>Big O Notation : N^2 이지만...</strong>

선택정렬과 마찬가지로 N^2의 시간복잡도를 가지지만 실제로 더 수행시간이 느리고 비효율적인 알고리즘이다.
👉 옆의 숫자를 비교해서 자리를 바꿔주는 연산을 계속해서 수행하기 때문.

---

<h2 id="sort-insertion">삽입 정렬</h2>

> 각 숫자를 "적절한" 위치에 삽입한다면 어떨까?

`✔1 ✔10 5 8 7 6 4 3 2 9` : 1과 10을 비교, 정렬되어있으므로 패스.

`1 ✔10 ✔5 8 7 6 4 3 2 9` : 10과 5를 비교, 스왑 👉 `1 ✔5 ✔10 8 7 6 4 3 2 9` 👉 `✔1 ✔5 10 8 7 6 4 3 2 9` : 1과 5를 비교, 정렬되어있으므로 패스.

`1 5 ✔10 ✔8 7 6 4 3 2 9` : 10과 8을 비교, 스왑 👉 `1 5 ✔8 ✔10 7 6 4 3 2 9` 👉 `1 ✔5 ✔8 10 7 6 4 3 2 9` : 5와 8을 비교, 정렬되어있으므로 패스...

```c++
#include <stdio.h>

int main(void){

	int i, j, temp;

	int array[10] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};
	//i의 범위는 배열의 길이 -1
	for(i=0; i<9; i++){
		j = i;
		while(j >= 0 && array[j] > array[j+1]){
			temp = array[j];
			array[j] = array[j+1];
			array[j+1] = temp;
			j--;
		}
	}

	for(i=0; i<10; i++){
		printf("%d ", array[i]);
	}

	return 0;
}
```

<strong>Big O Notation : N^2 이지만...</strong>

마찬가지로 N^2 의 시간복잡도를 가지지만 데이터가 "거의 정렬된" 상태에서 삽입정렬은 뛰어난 성능을 보인다.

---

<h2 id="sort-bubble">버블 정렬</h2>

> 바로 옆에 있는 숫자를 비교하고 교환하자.

`✔1 ✔10 5 8 7 6 4 3 2 9` : 1과 10을 비교하고 1이 더 작으므로 그냥 둔다.

`1 ✔10 ✔5 8 7 6 4 3 2 9` : 10과 5를 비교하고, 10이 더 크므로 교환한다. 👉 `1 ✔5 ✔10 8 7 6 4 3 2 9`

`1 5 ✔10 ✔8 7 6 4 3 2 9` : 10과 8을 비교하고, 10이 더 크므로 교환한다. 👉 `1 5 ✔8 ✔10 7 6 4 3 2 9` ...

`1 5 8 7 6 4 3 2 9 ✔10` : 따라서 마지막에는 가장 큰 숫자 10이 맨 끝에 위치하게 된다.

```c++
#include <stdio.h>

int main(void){

	int i, j, temp;

	int array[10] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};

	for(i=0; i<10; i++){
		for(j=0; j<9-i; j++){
			if(array[j] > array[j+1]){
				temp = array[j+1];
				array[j+1] = array[j];
				array[j] = temp;
			}
		}
	}

	for(i=0; i<10; i++){
		printf("%d ", array[i]);
	}

	return 0;
}
```

<strong>Big O Notation : N^2 이지만...</strong>

선택정렬과 마찬가지로 N^2의 시간복잡도를 가지지만 실제로 더 수행시간이 느리고 비효율적인 알고리즘이다.
👉 옆의 숫자를 비교해서 자리를 바꿔주는 연산을 계속해서 수행하기 때문.

---

<h2 id="sort-quick">퀵 정렬</h2>

> 두 부분으로 나눈다(분할과 정복 + 재귀)

(1) 첫 번째 숫자를 피벗으로 설정한다.

(2) 앞에서부터 피벗보다 큰 숫자를 찾는다, 뒤에서 부터 피벗보다 작은 숫자를 찾는다.

(3-1) 엇갈리지 않는다면 두 숫자를 swap하고 다시 2번을 수행한다.

(3-2) 엇갈린다면 피벗과 작은 숫자를 swap하고 피벗을 기준으로 분할한다.

`3 8 6 2 10 5 1 4 7 9`

`(3) 8 6 2 10 5 1 4 7 9` : (1)

`(3) 👉8 6 2 10 5 1👈 4 7 9` : (2) 엇갈리지 않음

`(3) ✔1 6 2 10 5 ✔8 4 7 9` : (3-1)

`(3) 1 👉6 2👈 10 5 8 4 7 9` : (2) 엇갈리지 않음

`(3) 1 ✔2 ✔6 10 5 8 4 7 9` : (3-1)

`(3) 1 2👈 👉6 10 5 8 4 7 9` : (2) 엇갈림

`✔2 1 ✔(3) 6 10 5 8 4 7 9` : (3-2)

`(2) 1 /--3--/ (6) 10 5 8 4 7 9` : (1) 3을 기준으로 분할

```c++
#include <stdio.h>

int number = 10;
int data[] = {3, 8, 6, 2, 10, 5, 1, 4, 7, 9};

//start : 시작 index
//end : 끝 index
void quickSort(int* data, int start, int end){
	//원소가 1개인 경우
	if(start >= end){
		return;
	}

	int pivot, i, j, temp;

	pivot = start;
	i = start + 1;
	j = end;

	//엇갈릴 때까지
	while(i <= j){
		while(i <= end && data[i] <= data[pivot]){
			i++;
		}
		while(j > start && data[j] >= data[pivot] ){
			j--;
		}
		//엇갈리지 않으면
		if(i < j){
			temp = data[i];
			data[i] = data[j];
			data[j] = temp;
		} else {
			temp = data[j];
			data[j] = data[pivot];
			data[pivot] = temp;
		}
	}

	quickSort(data, start, j-1);
	quickSort(data, j+1, end);
}

int main(void){
	quickSort(data, 0, number-1);

	for(int i=0; i<number; i++){
		printf("%d ", data[i]);
	}

	return 0;
}
```

<strong>Big O Notation : N \* log(N)</strong>

계속해서 절반으로 쪼개기 때문에 "일반적인 경우" 효율적인 알고리즘이지만, 최악의 경우, 예를 들어 데이터가 "거의 정렬된 상태"라면 N\*N 의 시간복잡도를 보여준다.("거의 정렬된 상태"에서는 삽입정렬이 더 뛰어날 수 있다.)
