#include <stdio.h>
void main() 
{
    float p, r, n;
    printf("Enter principal, rate of interest and time period: ");    
    scanf("%f %f %f", &p, &r, &n);
    float i = p * r * n / 100;
    printf("The simple interest is: %.2f\n", i);    
}