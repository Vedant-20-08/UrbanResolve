def read_short_words(file_name, max_length):
    try:
       
        with open(file_name, 'r') as file:
            short_words = []
            
            
            for line in file:
                
                words = line.split()
                
                
                for word in words:
                    if len(word) < max_length:
                        short_words.append(word)
            
            return short_words
    except FileNotFoundError:
        print(f"The file '{file_name}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_name = 'sample 9.txt'  
max_length = 4  
short_words = read_short_words(file_name, max_length)

print("Short words found in the file:")
for word in short_words:
    print(word)
