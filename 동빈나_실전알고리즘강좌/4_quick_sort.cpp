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
	
	//엇갈리지 않으면 계속해서 수행 
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
