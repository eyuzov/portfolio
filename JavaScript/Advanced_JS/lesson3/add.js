// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

const inputTitle = document.querySelector(".title");
const inputText = document.querySelector(".text");
const btnSave = document.querySelector(".btn_save");
let feedback = [];
btnSave.addEventListener("click", (e) => {
  feedback.push(inputText.value);

  //   localStorage.setItem(inputTitle.value, JSON.stringify(feedback));
  localStorage.setItem(inputTitle.value, JSON.stringify(feedback));
});
