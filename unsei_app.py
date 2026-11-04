name = input("氏名：")
birth_input = input("生年月日：")


name_length = 0
for char in name:

    if char != " " and char != " " and char != "・":
        name_length = name_length + 1

parts = birth_input.split("/")
year = int(parts[0])
month = int(parts[1])
day = int(parts[2])

total = name_length + year + month + day

if total % 6 == 0:
    fortune = "大吉"
elif total % 3 == 0:
    fortune = "中吉"
elif total % 2 == 0:
    fortune = "吉"
else:
    fortune = "凶"

print(name + "さんの運勢: " + fortune)
