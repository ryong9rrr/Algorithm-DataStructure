#include <stdio.h>
#include <algorithm>

int number, data[1000001];


/* 백준 2751번, 퀵 정렬로는 시간초과
void quickSort(int *data, int start, int end){
	if(start >= end){
		return;
	}
	int key = start;
	int i = start + 1, j = end, temp;
	while(i <= j){
		while(i <= end && data[i] <= data[key]){
			i++;
		}
		while(j > start && data[j] >= data[key]){
			j--;
		}
		if(i < j){
			temp = data[i];
			data[i] = data[j];
			data[j] = temp;
		} else {
			temp = data[j];
			data[j] = data[key];
			data[key] = temp;
		}
	}
	quickSort(data, start, j-1);
	quickSort(data, j+1, end);
}
*/

int main(void){
	scanf("%d", &number);
	for(int i=0; i<number; i++){
		scanf("%d", &data[i]);
	}
	//quickSort(data, 0, number-1);
	std::sort(data, data + number);
	for(int i=0; i<number; i++){
		printf("%d\n", data[i]);
	}
}

