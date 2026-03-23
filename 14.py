stack = []

def push(item):
    stack.append(item)
    print(f"{item} pushed.")

def pop():
    print(f"Popped: {stack.pop()}" if stack else "Stack is empty.")

def peek():
    print(f"Top: {stack[-1]}" if stack else "Stack is empty.")

def display():
    print(f"Stack: {stack}" if stack else "Stack is empty.")

while True:
    choice = input("\n1. Push\n2. Pop\n3. Peek\n4. Display\n5. Exit\nChoice: ")
    if choice == "1":
        push(input("Enter item: "))
    elif choice == "2":
        pop()
    elif choice == "3":
        peek()
    elif choice == "4":
        display()
    elif choice == "5":
        break
    else:
        print("Invalid choice.")
