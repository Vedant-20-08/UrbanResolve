import random

def roll_die():
    return random.randint(1, 6)

print("Rolling the die...")
result = roll_die()
print(f"The random number is: {result}")
