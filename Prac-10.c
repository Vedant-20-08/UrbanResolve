#include <stdio.h>

void main() 
{
    char op;
    float num1, num2, result;    
    printf("Enter calculation in format [number 1] [+ - * /] [number 2]: ");    
    scanf("%f %c %f", &num1, &op, &num2);
  
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            
            if (num2 != 0) 
            {
                result = num1 / num2;
            } 
            else 
            {
                printf("Error: Division by zero is not allowed.\n");                 
            }
            break;
        default:
            printf("Error: Invalid operator entered.\n");
            
    }    
    printf("Result: %.2f\n", result);
}
