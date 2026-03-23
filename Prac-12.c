#include <stdio.h>

void main() 
{
    int num, firstDigit, lastDigit, sum, temp;

    printf("Enter a number: ");
    scanf("%d", &num);

    temp = num;
    lastDigit = temp % 10;
    
    while (temp >= 10) 
    {
        temp /= 10;
    }
    firstDigit = temp;

    sum = firstDigit + lastDigit;

    printf("First digit: %d\n", firstDigit);
    printf("Last digit: %d\n", lastDigit);
    printf("Sum of first and last digit: %d\n", sum);
}