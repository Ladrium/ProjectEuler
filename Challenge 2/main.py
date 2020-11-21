last = 0
curr = 1
res = 0
for i in range(35):
    next = last + curr

    if next > 4000000: break
    if next % 2 == 0: res += next
    last = curr
    curr = next

print(res)
