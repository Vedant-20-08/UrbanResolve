#include <stdio.h>

void main() 
{
    int arr[10];
    for (int i = 0; i < 10; i++) 
    {
        printf("Enter number %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    int size = 10;
    int search;
    printf("Enter the number to search and replace: ");
    scanf("%d", &search);
    int replace = 0;
    int count = 0;
        
    for (int i = 0; i < size; i++) 
    {
        if (arr[i] == search) 
        {
            count++;
            arr[i] = replace;
        }
    }
    
    printf("Occurrences of %d: %d\n", search, count);
    printf("Updated array: ");
    for (int i = 0; i < size; i++) 
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}