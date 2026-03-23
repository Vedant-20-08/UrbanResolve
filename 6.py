import math

def multiply(a, b):
    return a * b
def divide(a, b):
    if b != 0:
        return a / b  
    else:
        print("Error Division by zero.")
def power(a, b):
    return a ** b
def square_root(a):
    if a >= 0: 
        return math.sqrt(a) 
    else:
        print("Error Negative number.")
def factorial(a): 
    if a >= 0 and a.is_integer():
        return math.factorial(a) 
    else:
        print("Error Invalid input.")

while True:
    print("\n 1. Multiply \n 2. Divide \n 3. Power \n 4. Square Root \n 5. Factorial \n 6. Exit")
    try:
        choice = int(input("Choose (1-6): "))
        if choice == 6: 
            print("Goodbye!")
            break
        if choice in [1, 2, 3]:
            a = float(input("Enter the first number: "))
            b = float(input("Enter the second number: "))
            if choice == 1:
                print(f"Result: {multiply(a, b)}")
            elif choice == 2:
                print(f"Result: {divide(a, b)}")
            elif choice == 3:
                print(f"Result: {power(a, b)}")
        elif choice == 4:
            a = float(input("Enter a number: "))
            print(f"Result: {square_root(a)}")
        elif choice == 5:
            a = int(input("Enter a number: "))
            print(f"Result: {factorial(a)}")
        else:
            print("Invalid choice. Please select a number between 1 and 6.")
    except Exception as e:
        print(f"Error: {e}")
