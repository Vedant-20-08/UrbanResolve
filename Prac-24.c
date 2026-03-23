#include <stdio.h>

int main() {
    int m1[3][3], m2[3][3], sum[3][3];
    int i, j;
    
    printf("Enter elements of first 3x3 matrix:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &m1[i][j]);
        }
    }
    
    printf("\nEnter elements of second 3x3 matrix:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &m2[i][j]);
        }
    }
    
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            sum[i][j] = m1[i][j] + m2[i][j];
        }
    }
    
    printf("\nSum of matrices:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d ", sum[i][j]);
        }
        printf("\n");
    }
}