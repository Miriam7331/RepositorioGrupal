let countries = [];
let inputElem = null;
let resultsElem = null;

function init() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => (countries = data));


  resultsElem = document.querySelector("ul");
  inputElem = document.querySelector("input");

  resultsElem.addEventListener("click", (event) => {
    handleResultClick(event);
  });
  inputElem.addEventListener("input", (event) => {
    autocomplete(event);
  });
  /*inputElem.addEventListener("keyup", (event) => {
    handleResultKeyDown(event);
  });*/
}

function autocomplete(event) {
  const value = inputElem.value;
  if (!value) {
    hideResults();
    inputElem.value = "";
    return;
  }

  const results = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(value.toLowerCase());
  });

  results.sort((a, b) =>
    (a.name.common.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 1) -
    (b.name.common.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 1) ||
    a.name.common.localeCompare(b.name.common)
  );
  const regex = new RegExp(value, "gi");
  resultsElem.innerHTML = results
    .map((result, index) => {
      const isSelected = index === 0;
      const match = result.name.common.replace(regex, (match) => `<strong>${match}</strong>`);

      return `
        <li
          id='autocomplete-result-${index}'
          class='autocomplete-result${isSelected ? " selected" : ""}'
          role='option'
          ${isSelected ? "aria-selected='true'" : ""}
        >
        ${match}
        </li>
      `;
    })
    .join("");
  resultsElem.classList.remove("hidden");
}


function handleResultClick(event) {
  if (event.target && event.target.nodeName === "LI") {
    selectItem(event.target);
  }
}
function handleResultKeyDown(event) {
  const { key } = event;
  switch (key) {
    case "Backspace":
      return;
    default:
      selectFirstResult();
  }
}

function selectFirstResult() {
  const value = inputElem.value;
  const autocompleteValue = resultsElem.querySelector(".selected");
  if (!value || !autocompleteValue) {
    return;
  }
  if (value !== autocompleteValue.innerText) {
    inputElem.value = autocompleteValue.innerText;
    inputElem.setSelectionRange(
      value.length,
      autocompleteValue.innerText.length
    );
  }
}
function selectItem(node) {
  if (node) {
    inputElem.value = node.innerText;
    hideResults();
  }
}

function hideResults() {
  resultsElem.innerHTML = "";
  resultsElem.classList.add("hidden");
}

init();