#include <stdio.h>

void main() {
    int n, i;
    int a = 0, b = 1, next;

    printf("Enter the number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series: ");
    for(i = 0; i < n; i++) 
    {
        if(i == 0) 
        {
            printf("%d ", a);
        } 
        else if(i == 1) 
        {
            printf("%d ", b);
        } 
        else 
        {
            next = a + b;
            printf("%d ", next);
            a = b;
            b = next;
        }
    }
    printf("\n");
}