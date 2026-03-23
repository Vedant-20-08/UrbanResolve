#include <stdio.h>

void main()
{
    int i,j,temp;
    int a[6] = {90,81,77,34,15,4};
    for (i=0;i<5;i++)
    {
        for (j=0;j<5;j++)
        {
            if (a[j]>a[j+1])
            {
                 temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
            }
        }
    }

    printf("The sorted array is:\n");
    for (i=0;i<6;i++)
    {
        printf("%d \n", a[i]);
    }
}