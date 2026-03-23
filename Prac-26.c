#include <stdio.h>

void main()
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, 100, stdin);
    int i = 0, len = 0;
    
    while(str[i] != '\0')
    {
        len++;
        i++;
    }

    printf("Length of the string = %d\n", len - 1);
}