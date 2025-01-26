//index task-1
// const input = document.querySelector("#input");
// const btn = document.querySelector("button");
// btn.addEventListener('click', changeValue);
// function changeValue() {
//     input.value = "world";
// };

//task-2
// const input = document.querySelector("#input");
// const btn = document.querySelector("button");
// btn.addEventListener('click', showValue);
// function showValue() {
//     alert(input.value);
// };

// Task 3

// const firstInput = document.querySelector("#first-input");
// const secondInput = document.querySelector("#second-input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", replaceValue);

// function replaceValue () {
//     const firstInputValue = firstInput.value;
//     firstInput.value = secondInput.value;
//     secondInput.value = firstInputValue;
// }

// Task 4

// const btn = document.querySelector("button");
// const paragraps = document.querySelectorAll("p");

// btn.addEventListener("click", changeTextContent);

// function changeTextContent() {
//   paragraps.forEach((paragrap, index) => {
//     paragrap.textContent = index + 1;
//   });
// }

// task 5

// const inputTest = document.querySelector("#test");
// const inputResult = document.querySelector("#result");
// const btn = document.querySelector("button");

// btn.addEventListener("click", result);

// function result() {
//   if (isNaN(inputTest.value)) {
//     return alert("Ввели не число");
//   }
//   inputResult.value = inputTest.value ** 2;
// }

//task 6
const title = document.querySelector("h1");
const list = document.createElement("ul");
let message = prompt();
while (message !== null) {
  const listItem = document.createElement("li");
  listItem.textContent = message;
  list.appendChild(listItem);
  message = prompt();
}
title.after(list);
