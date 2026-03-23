#include <stdio.h>

void main()
{
    int n, i;
    float sum = 0, avg;

    printf("How many numbers do you want to enter? ");
    scanf("%d", &n);

    float arr[n];
    
    for (i = 0; i < n; i++)
    {
        printf("Enter number %d: ", i + 1);
        scanf("%f", &arr[i]);
    }
    
    for (i = 0; i < n; i++)
    {
        sum = sum + arr[i];
    }
    
    avg = sum / n;

    printf("Sum = %.2f\n", sum);
    printf("Average = %.2f\n", avg);
}
