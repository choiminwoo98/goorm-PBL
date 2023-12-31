const span = document.querySelector("span");
const input = document.querySelectorAll("table input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  let answer = [...Array(10)].map(() => new Array(10));
  console.log(answer);
  input.forEach((input, i) => (answer[parseInt(i / 10)][i % 10] = input.value));
  console.log(answer);
  input.forEach((input) => (input.value = ""));
  downloadTemplate(answer);
});
function downloadTemplate(csv) {
  let filename = "sample.csv";

  const BOM = "\uFEFF";

  csv = BOM + csv.join("\n");

  let csvFile = new Blob([csv], { type: "text/csv" });

  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";

  document.body.appendChild(downloadLink);

  downloadLink.click();
}

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
