n = 600851475143
i = 2
while i <= n:
    if not (n % i): n/= i
    else: i += 1

print(i)
