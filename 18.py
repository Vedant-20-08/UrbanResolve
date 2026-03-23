import mysql.connector

conn = mysql.connector.connect(
    host="localhost", user="root", password="Ved@nt9028", database="my_database"
)
cursor = conn.cursor()
def search_record():
    emp_id = input("Enter Employee ID: ")
    cursor.execute("SELECT * FROM employees WHERE id = %s", (emp_id,))
    record = cursor.fetchone()
    if record:
        print(f"\nFound: ID: {record[0]}, Name: {record[1]}, Age: {record[2]}, Department: {record[3]}")
    else:
        print("No record found.")
def display_records():
    cursor.execute("SELECT * FROM employees")
    records = cursor.fetchall()
    if records:
        print("\nEmployee Records:")
        for row in records:
            print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}, Department: {row[3]}")
    else:
        print("No records found.")
while True:
    choice = input("\n1. Search by ID\n2. Display All\n3. Exit\nChoice: ")
    if choice == "1":
        search_record()
    elif choice == "2":
        display_records()
    elif choice == "3":
        break
    else:
        print("Invalid choice.")

cursor.close()
conn.close()
