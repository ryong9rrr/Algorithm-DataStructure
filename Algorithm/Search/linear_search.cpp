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
