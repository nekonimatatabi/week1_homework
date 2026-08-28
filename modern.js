// 練習用のデータ（スキル一覧）
const skills = [
  { name: "HTML", level: 4, category: "markup" },
  { name: "CSS", level: 3, category: "markup" },
  { name: "JavaScript", level: 2, category: "program" },
  { name: "React", level: 1, category: "program" },
];

// ① 分割代入：1件目から name と level を取り出す
const { name, level } = skills[0];
console.log(name, level);

// ② スプレッド構文：元の配列は変えずに1件足した新しい配列を作る
const newSkills = [...skills, { name: "PHP", level: 2, category: "program" }];
console.log("skills の件数:", skills.length);
console.log("newSkills の件数:", newSkills.length);

// ③ 三項演算子：level が3以上なら「得意」、そうでなければ「勉強中」
skills.forEach(function (skill) {
  const label = skill.level >= 3 ? "得意" : "勉強中";
  console.log(skill.name, label);
});

// ④ filter：category が "program" のスキルだけを取り出す
const programSkills = skills.filter(function (skill) {
  return skill.category === "program";
});

programSkills.forEach(function (skill) {
  console.log(skill.name);
});
