#include <stdio.h>

void main() 
{
    int n1, n2, n3, max;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &n1, &n2, &n3);

    if (n1 > n2) 
    {
        if (n1 > n3) 
        {
            max = n1;
        } 
        else 
        {
            max = n3;
        }
    } 
    else 
    {
        if (n2 > n3) 
        {
            max = n2;
        } 
        else 
        {
            max = n3;
        }
    }
    printf("The maximum number is: %d\n", max);
}
   