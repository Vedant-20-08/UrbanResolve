import mysql.connector

conn = mysql.connector.connect(
    host="localhost", user="root", password="Ved@nt9028", database="my_database"
)
cursor = conn.cursor()

def update_record():
    emp_id = input("Enter Employee ID to update: ")
    name = input("Enter new name: ")
    age = int(input("Enter new age: "))
    department = input("Enter new department: ")

    query = "UPDATE employees SET name = %s, age = %s, department = %s WHERE id = %s"
    cursor.execute(query, (name, age, department, emp_id))
    conn.commit()

    if cursor.rowcount > 0:
        print(f"Record with ID {emp_id} updated successfully.")
    else:
        print(f"No record found with ID {emp_id}.")

while True:
    choice = input("\n1. Update Record\n2. Exit\nChoice: ")
    if choice == "1":
        update_record()
    elif choice == "2":
        break
    else:
        print("Invalid choice. Please try again.")

cursor.close()
conn.close()
