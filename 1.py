def add(a, b):
    print(a + b)
def subtract(a, b):
    print(a - b)
def multiply(a, b):
    print(a * b)
def divide(a, b):
    if b != 0:
        print(a / b)
    else:
        print("Error! Division by zero.")
while True:        
     print("Menu:")
     print("1. Addition")
     print("2. Subtraction")
     print("3. Multiplication")
     print("4. Division")
     print("5. Exit")
     choice=int(input("What do you want to perform?"))
     if choice==1:
        x=float(input("Enter 1st number: "))
        y=float(input("Enter 2nd number: "))
        add(x,y)
     elif choice==2:
        x=float(input("Enter 1st number: "))
        y=float(input("Enter 2nd number: "))
        subtract(x,y)
     elif choice==3:
        x=float(input("Enter 1st number: "))
        y=float(input("Enter 2nd number: "))
        multiply(x,y)
     elif choice==4:
        x=float(input("Enter 1st number: "))
        y=float(input("Enter 2nd number: "))
        divide(x,y)
     elif choice==5:
        print("Thank You!")
        break