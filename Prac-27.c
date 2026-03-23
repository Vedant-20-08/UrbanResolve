#include <stdio.h>

void main()
{
    char a[100];
    printf("Enter a string: ");
    fgets(a, 100, stdin);
    int i = 0;
        
    while (a[i] != '\0') 
    {
        if (a[i] >= 'a' && a[i] <= 'z') 
        {
            a[i] = a[i] - 32;
        }
        i++;
    }
    
    printf("Uppercase string: %s\n", a);
} 