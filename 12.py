import pickle
class Record:
    def __init__(self, id, name, age):
        self.id, self.name, self.age = id, name, age

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Age: {self.age}"
    
filename = "records 12.dat"

def add_record():
    with open(filename, "ab") as file:
        pickle.dump(Record(input("Enter ID: "), input("Enter Name: "), int(input("Enter Age: "))), file)
    print("Record added.")
def modify_record():
    search_id, modified, records = input("Enter ID to modify: "), False, []
    try:
        with open(filename, "rb") as file:
            while True:
                try:
                    record = pickle.load(file)
                    if record.id == search_id:
                        print("Found:", record)
                        record.name, record.age = input("New Name: "), int(input("New Age: "))
                        modified = True
                    records.append(record)
                except EOFError:
                    break
    except FileNotFoundError:
        print("File not found."); return
    with open(filename, "wb") as file:
        for record in records:
            pickle.dump(record, file)
    print("Record modified." if modified else "Record not found.")
while True:
    choice = input("\n1. Add Record\n2. Modify Record\n3. Exit\nChoice: ")
    if choice == "1": add_record()
    elif choice == "2": modify_record()
    elif choice == "3": break
    else: print("Invalid choice.")
