#include <stdio.h>

void main()
{
    int totalDays, years, months, days;
    
    printf("Enter number of days: ");
    scanf("%d", &totalDays);
    
    years = totalDays / 365;
    totalDays = totalDays % 365;    
    
    months = totalDays / 30;
    days = totalDays % 30;
    
    printf("\n%d years, %d months, and %d days\n", years, months, days);
       
}