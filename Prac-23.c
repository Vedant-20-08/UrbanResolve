#include <stdio.h>

void main() 
{
    int n, sum = 0;
    
    printf("Enter the value of n: ");
    scanf("%d", &n);
    
    int arr[n];
     
    for (int i = 0; i < n; i++) 
    {
        arr[i] = (i + 1) * (i + 1);
        sum += arr[i];
    }

    printf("Series: ");
    for (int i = 0; i < n; i++) 
    {
        printf("%d", arr[i]);
        if (i < n - 1) printf(" + ");
    }
    
    printf("\nSum: %d\n", sum);
}