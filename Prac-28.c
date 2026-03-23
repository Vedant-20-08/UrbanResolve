#include <stdio.h>

void main() 
{
    char a[100], b[100];
    printf("Enter a string: ");
    fgets(a, 100, stdin);
    int i = 0;
           
    while (a[i] != '\0') 
    {
        b[i] = a[i];
        i++;
    }

    b[i] = '\0';
    
    printf("Source string: %s\n", a);
    printf("Destination string: %s\n", b);
}