#include <stdio.h>

void main()
{
    int num, first, middle, last;

    printf("Enter a three digit number: ");
    scanf("%d", &num);

    if (num >= 100 && num <= 999)
    {
        first = num / 100;       
        middle = (num / 10) % 10;
        last = num % 10;         

        if (first == last)
            printf("%d is a palindrome.", num);
        else
            printf("%d is not a palindrome.", num);
    }
    
    else
    {
        printf("Invalid input! Please enter a three digit number.");
    }
}
