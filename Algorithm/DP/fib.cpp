# include <stdio.h>

int d[101];

int fib(int x){
	if(x==1) return 1;
	if(x==2) return 1;
	// if there
	if(d[x] != 0 ) return d[x];
	return d[x] = fib(x-1) + fib(x-2);
}

int main(void){
	printf("%d", fib(30));
}
