#include <stdio.h>

void main() 
{
    char a[100] = "Hello ";
    char b[100] = "World";
    char c[200] = "";
    
    int i = 0, j = 0;

    while (a[i] != '\0') 
    {
        c[i] = a[i];
        i++;
    }
    
    while (b[j] != '\0') 
    {
        c[i] = b[j];
        i++;
        j++;
    }

    c[i] = '\0';    
    printf("Concatenated string: %s\n", c);
}