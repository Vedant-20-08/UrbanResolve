def display_words_with_hash(file_name):
    try:
        
        with open(file_name, 'r') as file:
            
            for line in file:
                
                words = line.split()
                
                print('#'.join(words))
    except FileNotFoundError:
        print(f"The file '{file_name}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_name = 'sample1.txt' 
display_words_with_hash(file_name)
