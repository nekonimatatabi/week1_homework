class Engineer:

  def __init__(self, name, tasks):
    self.name = name
    self.stamina = 100
    self.caffeine = 0
    self.tasks = tasks

  def code(self):
    self.stamina = self.stamina - 25
    self.tasks = self.tasks - 1
    print(
        "\n" + self.name + "は猛烈にキーボードを叩いた！（残りタスク: " + str(self.tasks) + "）"
    )

  def drink_energy_drink(self):
    self.stamina = self.stamina + 15

    if self.stamina > 100:
      self.stamina = 100

    self.caffeine = self.caffeine + 35
    print("\n魔剤を注入した！ 翼を授かった気がする。（カフェイン: " + str(self.caffeine) + "）")

  def power_nap(self):
    self.stamina = self.stamina + 30
    if self.stamina > 100:
      self.stamina = 100

    self.caffeine = self.caffeine - 20

    if self.caffeine < 0:
      self.caffeine = 0

    print("\n机に突っ伏して15分仮眠をとった。頭が少しスッキリした！")

  def show_status(self):
    print(
        "【"
        + self.name
        + "の状態】 体力: "
        + str(self.stamina)
        + "/100 | カフェイン: "
        + str(self.caffeine)
        + " | 残りタスク: "
        + str(self.tasks)
    )


def show_result(engineer, success):
    print("\n========================================")

    if success == True:
    print("祝！ 始業時間までにすべてのタスクが完了しました！")
    print(engineer.name + "はドヤ顔でプルリクエストを提出して帰宅した。")
    else:
    print("ゲームオーバー" + engineer.name + "は過労で力尽き、意識を失った。")
    print("翌朝、Slackでメンションの嵐が吹き荒れることになった...")
    print("========================================")



print("=== 午前4時のデスマーチ・サバイバル ===")
user_name = input("エンジニアの名前を入力してください: ")
tasks_input = input("朝までに終わらせるタスク数（例: 3〜5）: ")
tasks = int(tasks_input)


player = Engineer(user_name, tasks)
is_success = False

while player.stamina > 0 and player.tasks > 0:
    player.show_status()


    if player.caffeine >= 80:
    print("警告: カフェインの過剰摂取により動悸と手の震えが止まらない！")
    player.power_nap()
    else:
    print("\n行動を選んでください:")
    print("  [1] コードを書く")
    print("  [2] エナジードリンクを飲む")
    print("  [3] 15分仮眠する")
    action = input("番号を選択 (1/2/3): ")

    if action == "1":
    player.code()
    elif action == "2":
    player.drink_energy_drink()
    elif action == "3":
    player.power_nap()
    else:
    print("無効な選択です。集中力が切れていますよ！")


if player.tasks <= 0:
    is_success = True


show_result(player, is_success)
