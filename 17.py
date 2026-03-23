import mysql.connector
conn = mysql.connector.connect(
    host="localhost",      
    user="root",           
    password="Ved@nt9028",   
    database="my_database" 
)

cursor = conn.cursor()

def insert_record():
    name = input("Enter name: ")
    age = int(input("Enter age: "))
    department = input("Enter department: ")
    
    query = "INSERT INTO employees (name, age, department) VALUES (%s, %s, %s)"
    values = (name, age, department)
    
    cursor.execute(query, values)
    conn.commit()  
    print("Record inserted successfully.")

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
    print("\n1. Insert Record")
    print("2. Display Records")
    print("3. Exit")
    choice = input("Enter your choice: ")
    if choice == "1":
        insert_record()
    elif choice == "2":
        display_records()
    elif choice == "3":
        break
    else:
        print("Invalid choice. Please try again.")

cursor.close()
conn.close()
