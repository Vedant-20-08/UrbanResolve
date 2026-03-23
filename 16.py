import mysql.connector

conn = mysql.connector.connect(
    host="localhost",      
    user="root",           
    password="Ved@nt9028"    
)

cursor = conn.cursor()
def create_database():
    try:
        cursor.execute("CREATE DATABASE IF NOT EXISTS my_database")
        print("Database 'my_database' created or already exists.")
    except mysql.connector.Error as err:
        print(f"Error creating database: {err}")

def create_table():
    try:
        cursor.execute("USE my_database")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS employees (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                age INT,
                department VARCHAR(50)
            )
        """)
        print("Table 'employees' created or already exists.")
    except mysql.connector.Error as err:
        print(f"Error creating table: {err}")

create_database()
create_table()

cursor.close()
conn.close()
