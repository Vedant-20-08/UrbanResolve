def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

sum_result = add(num1, num2)
product_result = multiply(num1, num2)

print(f"Sum: {sum_result}")
print(f"Product: {product_result}")
