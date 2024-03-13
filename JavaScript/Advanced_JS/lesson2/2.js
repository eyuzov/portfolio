// Задание 2

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы,
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
// Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const button = document.getElementById("send");
const input = document.getElementById("input");
const container = document.getElementById("container");

function validateAndAppendReview() {
  try {
    if (input.value.length < 50 || input.value.length > 500) {
      throw new Error(`Review length < 50 or > 500`);
    } else {
      const newRev = document.createElement("div");
      newRev.textContent = input.value;
      container.appendChild(newRev);
      const hr = document.createElement("hr");
      container.appendChild(hr);
      input.value = "";
    }
  } catch (error) {
    alert(error.message);
    input.value = "";
  }
}

button.addEventListener("click", (e) => validateAndAppendReview());

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

initialData.forEach((elem) => {
  const title = document.createElement("div");
  title.textContent = elem.product;
  container.appendChild(title);
  elem.reviews.forEach((rev) => {
    const review = document.createElement("div");
    review.textContent = rev.text;
    container.appendChild(review);
  });
  const hr = document.createElement("hr");
  container.appendChild(hr);
});
