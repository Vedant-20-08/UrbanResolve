#include <stdio.h>

void main() 
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &marks);

    if (marks >= 80 && marks <= 100) {
        printf("Grade: Distinction\n");
    } else if (marks >= 60 && marks <= 79) {
        printf("Grade: First class\n");
    } else if (marks >= 40 && marks <= 59) {
        printf("Grade: Second class\n");
    } else if (marks >= 0 && marks < 40) {
        printf("Grade: Fail\n");
    } else {
        printf("Invalid marks entered.\n");
    }   
}