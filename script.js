// 必須①：スキルカードをクリックすると詳細を表示 / 非表示にする
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const detail = card.querySelector(".skill-detail");

    // 今表示されているかどうかで切り替える
    if (detail.style.display === "block") {
      detail.style.display = "none";
    } else {
      detail.style.display = "block";
    }
  });
});

// 必須②：いいねボタンのカウンター
const likeBtn = document.querySelector("#like-btn");
const countText = document.querySelector("#count");
let likeCount = 0;

likeBtn.addEventListener("click", function () {
  likeCount = likeCount + 1;
  countText.textContent = likeCount;
});

// オプション①：ダークモードの切り替え
const darkModeBtn = document.querySelector("#dark-mode-btn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // ボタンの文言も状態に合わせて変える
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "ライトモード";
  } else {
    darkModeBtn.textContent = "ダークモード";
  }
});

// オプション②：お問い合わせフォームのバリデーション
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const formMessage = document.querySelector("#form-message");

// 入力内容をチェックしてエラーメッセージを返す関数
function checkForm(name, email) {
  if (name === "") {
    return "お名前を入力してください。";
  }
  if (email === "") {
    return "メールアドレスを入力してください。";
  }
  if (email.includes("@") === false) {
    return "メールアドレスの形式が正しくありません。";
  }
  return "";
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 実際の送信はせずページ遷移を止める

  const errorMessage = checkForm(nameInput.value, emailInput.value);

  if (errorMessage === "") {
    formMessage.textContent = "送信内容を確認しました。ありがとうございます。";
    formMessage.className = "success";
  } else {
    formMessage.textContent = errorMessage;
    formMessage.className = "error";
  }
});
