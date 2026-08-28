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

// ここから発展課題：LP のスキルセクションをこのファイルから作る

// カードに出す説明文（スキル名をキーにする）
const skillTexts = {
  HTML: "セマンティックタグを意識して、ページの構造を組み立てられます。",
  CSS: "Flexbox を使ったレイアウトとレスポンシブ対応を練習中です。",
  JavaScript: "DOM 操作とイベント処理で、動きのあるページを作れます。",
  React: "スパルタキャンプ平泉町 React 編で学習を始めたところです。",
  PHP: "スパルタキャンプ盛岡 Laravel 編で基礎を学びました。",
};

// スキルの配列を受け取って、カードの HTML 文字列を作る関数
function makeSkillCards(list) {
  const cards = list.map(function (skill) {
    // レベルが3以上なら「得意」、そうでなければ「勉強中」（三項演算子）
    const label = skill.level >= 3 ? "得意" : "勉強中";
    return `<div class="skill-card">
      <h4>${skill.name}</h4>
      <p class="skill-level">${label}</p>
      <p class="skill-detail">${skillTexts[skill.name]}（レベル ${skill.level}）</p>
    </div>`;
  });
  // 配列のままでは差し込めないので、1本の文字列につなげる
  return cards.join("");
}

// マークアップのスキルだけを絞り込んでカードを差し込む
const markupList = newSkills.filter(function (skill) {
  return skill.category === "markup";
});
document.querySelector("#markup-skills").innerHTML = makeSkillCards(markupList);

// プログラミングのスキルだけを絞り込んでカードを差し込む
const programList = newSkills.filter(function (skill) {
  return skill.category === "program";
});
document.querySelector("#program-skills").innerHTML = makeSkillCards(programList);
