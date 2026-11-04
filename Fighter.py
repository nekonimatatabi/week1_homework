class Fighter:
    def __init__(self, name, hp, attack, defense):
        self.name = name
        self.hp = hp
        self.attack = attack
        self.defense = defense

    def super_saiyan(self):

        self.attack = self.attack * 2
        print(self.name + "はスーパーサイヤ人に変身した! 攻撃力: " + str(self.attack))

    def punch(self, opponent):

        damage = self.attack - opponent.defense
        if damage < 0:
            damage = 0


        opponent.hp = opponent.hp - damage
        if opponent.hp < 0:
            opponent.hp = 0

        print(
            self.name
            + "の攻撃! "
            + opponent.name
            + "に"
            + str(damage)
            + "のダメージ! ("
            + opponent.name
            + "のHP: "
            + str(opponent.hp)
            + ")"
        )


        if opponent.hp == 0:
            print(opponent.name + "は倒れた! " + self.name + "の勝利!")
            return True
        else:
            return False



gokuu = Fighter("悟空", 1000, 100, 50)
vegita = Fighter("ベジータ", 1000, 80, 100)


gokuu.super_saiyan()


turn = 1
while True:
    print("--- ターン" + str(turn) + " ---")


    if gokuu.punch(vegita) == True:
        break


    if vegita.punch(gokuu) == True:
        break

    turn = turn + 1
