#include <stdio.h>
void main() 
{
   float F,C;
   printf("Enter the temperature in Fahrenheit: ");
   scanf("%f",&F);
   C=(F-32)*5/9;
   printf("The temperature in Celsius is: %.2f",C);    
}