def copy_lines(input_file, output_file, line_numbers):
    try:
        with open(input_file, 'r') as infile:
            lines = infile.readlines()  
            
            with open(output_file, 'w') as outfile:
                for line_number in line_numbers:
                    
                    if 1 <= line_number <= len(lines):
                        outfile.write(lines[line_number - 1])  
                    else:
                        print(f"Line {line_number} is out of range.")
    
    except FileNotFoundError:
        print(f"The file '{input_file}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

input_file = 'sample 10.txt'  
output_file = 'Output 10.txt'  
line_numbers = [1, 3, 5]  

copy_lines(input_file, output_file, line_numbers)
