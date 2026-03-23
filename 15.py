stack = {"data": [], "top": -1}
def push(item):
    stack["top"] += 1
    stack["data"].append(item)
    print(f"{item} pushed to stack.")
def pop():
    if stack["top"] == -1:
        print("Stack is empty. Nothing to pop.")
    else:
        print(f"Popped: {stack['data'].pop()}")
        stack["top"] -= 1
def peek():
    if stack["top"] == -1:
        print("Stack is empty.")
    else:
        print(f"Top: {stack['data'][stack['top']]}")
def display():
    if stack["top"] == -1:
        print("Stack is empty.")
    else:
        print("Stack contents:", stack["data"])
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
