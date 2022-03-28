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
