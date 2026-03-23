#include <stdio.h>
void main() 
{
  float C,F;
    printf("Enter the temperature in Celsius: ");
    scanf("%f",&C);
    F=(C*9/5)+32;
    printf("The temperature in Fahrenheit is: %.2f",F);      
}