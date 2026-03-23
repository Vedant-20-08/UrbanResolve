#include <stdio.h>

void main() 
{
    char a[100];
    printf("Enter a string: ");
    fgets(a, 100, stdin);
    char b[100];
    printf("Enter another string: ");
    fgets(b, 100, stdin);
    int len1 = 0, len2 = 0;
    while (a[len1] != '\0') 
    {
        len1++;
    }
    while (b[len2] != '\0') 
    {
        len2++;
    }
    if (len1>len2)    
    {
        printf("A string is greater");
    }
    else if (len1==len2)    
    {
        printf("Both strings are equal");
    }
    else
    {
        printf("B string is greater");
    }       
}