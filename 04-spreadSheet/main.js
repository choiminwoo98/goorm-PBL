const span = document.querySelector("span");
const input = document.querySelectorAll("table input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  let answer = "";
  input.forEach((input) => (answer += input.value + ","));
  console.log(answer);
  input.forEach((input) => (input.value = ""));
});

document.querySelectorAll("table input").forEach((input) => {
  input.addEventListener("focus", (e) => {
    highlightFirstCells(e.target);
  });

  input.addEventListener("blur", (e) => {
    removeHighlight();
  });
});

function highlightFirstCells(inputElem) {
  const tdElem = inputElem.closest("td");
  const trElem = tdElem.closest("tr");
  const tdIndex = Array.from(tdElem.parentNode.children).indexOf(tdElem);
  span.innerText =
    "Cell: " +
    trElem.parentNode.children[0].children[tdIndex].innerText +
    trElem.children[0].innerText;

  // 해당 행의 첫 번째 셀 강조
  trElem.children[0].classList.add("highlight");

  // 해당 열의 첫 번째 셀 강조
  trElem.parentNode.children[0].children[tdIndex].classList.add("highlight");
}

function removeHighlight() {
  document.querySelectorAll(".highlight").forEach((cell) => {
    cell.classList.remove("highlight");
  });
}
