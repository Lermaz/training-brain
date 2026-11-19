def solution(a):
    n = len(a)
    b = [0 for _ in range(n)]
    for i in range(n):
        b[i] = a[i]
        if i > 0:
            b[i] += a[i - 1]
        if i < n - 1:
            b[i] += a[i + 1]
    return b

a = [4, 0, 1, -2, 3]
print("Result:", solution(a));