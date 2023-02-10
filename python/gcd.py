def gcd(a, b):
  
  return a

a = int(input())
b = int(input())

while b != 0:
    a, b = b, a % b

print("GCD: ", a)
