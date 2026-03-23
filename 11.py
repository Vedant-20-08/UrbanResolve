import pickle

class Record:
    def __init__(self, id, name, age):
        self.id, self.name, self.age = id, name, age

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Age: {self.age}"

filename = "records 11.dat"

while True:
    choice = input("\n1. Add Record\n2. Search Record\n3. Exit\nEnter your choice: ")
    if choice == "1":
        with open(filename, "ab") as file:
            pickle.dump(Record(input("Enter ID: "), input("Enter Name: "), int(input("Enter Age: "))), file)
        print("Record added.")
    elif choice == "2":
        search_id = input("Enter ID to search: ")
        found = False
        try:
            with open(filename, "rb") as file:
                while True:
                    try:
                        record = pickle.load(file)
                        if record.id == search_id:
                            print("Record found:", record)
                            found = True
                            break
                    except EOFError:
                        break
        except FileNotFoundError:
            print("File not found.")
        if not found:
            print("Record not found.")
    elif choice == "3":
        break
    else:
        print("Invalid choice.")
