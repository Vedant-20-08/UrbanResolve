import csv
filename = "employees 13.csv"
def add_employee():
    with open(filename, "a", newline="") as file:
        writer = csv.writer(file)
        emp_id = input("Enter Employee ID: ")
        name = input("Enter Name: ")
        department = input("Enter Department: ")
        writer.writerow([emp_id, name, department])
        print("Employee record added.")

def search_employee():
    emp_id = input("Enter Employee ID to search: ")
    found = False
    try:
        with open(filename, "r") as file:
            reader = csv.reader(file)
            for row in reader:
                if row and row[0] == emp_id:
                    print(f"Found: ID={row[0]}, Name={row[1]}, Department={row[2]}")
                    found = True
                    break
    except FileNotFoundError:
        print("No records found.")
    if not found:
        print("Employee not found.")
while True:
    choice = input("\n1. Add Employee\n2. Search Employee\n3. Exit\nEnter your choice: ")
    if choice == "1":
        add_employee()
    elif choice == "2":
        search_employee()
    elif choice == "3":
        break
    else:
        print("Invalid choice. Please try again.")
