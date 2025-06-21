def add_student():
        f=open("students.txt", "a")
        roll = input("Enter Roll Number: ")
        name = input("Enter Name: ")
        branch = input("Enter Branch: ")
        f.write(f"{roll},{name},{branch}\n")
        print("Student record added successfully.\n")

def view_students():
    try:
            f=open("students.txt", "r")
            data = f.readlines()
            if data:
                print("\n--- Student Records ---")
                for line in data:
                    roll, name, branch = line.strip().split(",")
                    print(f"Roll: {roll} | Name: {name} | Branch: {branch}")
                print()
            else:
                print("No student records found.\n")
    except FileNotFoundError:
        print("No data file found. Add a student first.\n")

def search_student():
    roll_to_find = input("Enter Roll Number to search: ")
    found = False
    try:
        f=open("students.txt", "r")
        for line in f:
            roll, name, branch = line.strip().split(",")
            if roll == roll_to_find:
                print(f"Found: Roll: {roll} | Name: {name} | Branch: {branch}\n")
                found = True
                break
        if not found:
            print("Student not found.\n")
    except FileNotFoundError:
        print("Data file not found.\n")

def delete_student():
    roll_to_delete = input("Enter Roll Number to delete: ")
    lines = []
    found = False
    try:
        f=open("students.txt", "r")
        lines = f.readlines()
        f=open("students.txt", "w")
        for line in lines:
            roll, name, branch = line.strip().split(",")
            if roll != roll_to_delete:
                f.write(line)
            else:
                found = True
        if found:
            print("Student deleted successfully.\n")
        else:
            print("Student not found.\n")
    except FileNotFoundError:
        print("No data file found.\n")

def menu():
    while True:
        print("=== Student Data Management System ===")
        print("1. Add Student")
        print("2. View All Students")
        print("3. Search Student by Roll Number")
        print("4. Delete Student")
        print("5. Exit")
        choice = input("Enter your choice (1-5): ")

        if choice == "1":
            add_student()
        elif choice == "2":
            view_students()
        elif choice == "3":
            search_student()
        elif choice == "4":
            delete_student()
        elif choice == "5":
            print("Exiting the program.")
            break
        else:
            print("Invalid choice. Try again.\n")

# Run the menu
menu()
