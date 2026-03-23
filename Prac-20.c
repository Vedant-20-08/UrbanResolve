#include <stdio.h>

void main() 
{
    int arr[10];
    int max, min;
        
    printf("Enter 10 numbers:\n");
    for (int i = 0; i < 10; i++) 
    {
        printf("Number %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    
    max = arr[0];
    min = arr[0];
    
        for (int i = 1; i < 10; i++) 
        {
        if (arr[i] > max) 
        {
            max = arr[i];
        }
        if (arr[i] < min) 
        {
            min = arr[i];
        }
    }    
    printf("\nMaximum number: %d\n", max);
    printf("Minimum number: %d\n", min);    
}