def fibonacci(n):
  if n <= 0:
    return []
  elif n == 1:
    return [0]
  elif n == 2:
    return [0, 1]
  else:
    res = [0, 1]
    for i in range(2, n):
      res.append(res[i-1] + res[i-2])
    return res

n = int(input())
print(fibonacci(n))