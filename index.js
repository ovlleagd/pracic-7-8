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

const btn = document.querySelector("button");
const paragraps = document.querySelectorAll("p");

btn.addEventListener("click", changeTextContent);

function changeTextContent() {
  paragraps.forEach((paragrap, index) => {
    paragrap.textContent = index + 1;
  });
}
