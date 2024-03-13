const feedbackElem = document.querySelector(".feedback");

const inputText = document.querySelector(".text");
const btnSave = document.querySelector(".btn_save");

const ll = localStorage.length;

for (let i = 0; i < ll; i++) {
  if (localStorage.key(i) === "id") {
    continue;
  }
  const feed = localStorage.getItem(localStorage.key(i));

  const feedback = JSON.parse(feed);

  const titleElem = document.createElement("div");
  const textElem = document.createElement("div");
  const textElem1 = document.createElement("div");
  textElem1.classList.add("q");
  titleElem.textContent = feedback.title;
  textElem.textContent = feedback.text;
  textElem1.appendChild(titleElem);
  textElem1.appendChild(textElem);
  feedbackElem.appendChild(textElem1);
}

// inputTitle.textContent = feedback.title;
// inputText.textContent = feedback.text;

// inputTitle.addEventListener("click", (e) => {
//   inputTitle.textContent = feedback.title;
//   //   feedback.text = inputText.value;
// });
