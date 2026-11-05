primes = []


for num in range(2, 41):
    count = 0

    # 1からその数自身まで全部割ってみる
    for i in range(1, num + 1):
        if num % i == 0:
            count = count + 1


    if count == 2:
        primes.append(num)

print(primes)
