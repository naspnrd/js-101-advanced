let selectedCell = "";
let activeCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("#options-form");
const expressionInput = document.querySelector("#expression");
let state = {};
/*
  state: {
    c4: {
      innerText: "Neeraj",
      isBold: true,
      isUnderlined: false,
      isItalic: true,
      aling: ,
      fontSize: ,
      fontFamily: 
      texColor: ,
      backgroundColor: 
    }
  }
*/
const defaultState = {
  innerText: "",
  isBold: false,
  isUnderlined: false,
  isItalic: false,
  align: "left",
  fontSize: "16",
  fontFamily: "default",
  textColor: "#000000",
  backgroundColor: "#ffffff",
};

body.addEventListener("click", (event) => {
  form.reset();
  if (selectedCell) selectedCell.classList.remove("active-cell");
  // console.log(event.target);
  // console.log(event.currentTarget);
  selectedCell = event.target;
  selectedCell.classList.add("active-cell");
  activeCellElement.innerText = selectedCell.id;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }

  state[selectedCell.id].innerText = selectedCell.innerText;
  applyCellInfoToForm();
});

body.addEventListener("input", (event) => {
  selectedCell = event.target;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }

  state[selectedCell.id].innerText = selectedCell.innerText;
});
form.addEventListener("change", () => {
  // console.log("change event triggered");
  if (!selectedCell) {
    alert("Please select a cell before making any change on the options");
    form.reset();
    return;
  }
  const formData = {
    fontFamily: form["fontFamily"].value,
    fontSize: form["fontSize"].value,
    isBold: form["isBold"].checked,
    isItalic: form["isItalic"].checked,
    isUnderlined: form["isUnderlined"].checked,
    align: form["align"].value,
    textColor: form["textColor"].value,
    backgroundColor: form["backgroundColor"].value,
  };
  state[selectedCell.id] = { ...formData, innerText: selectedCell.innerText };
  // console.log(formData);
  applyStylesToSelectedCell(formData);
});

function applyStylesToSelectedCell(styles) {
  selectedCell.style.fontSize = styles.fontSize + "px";
  selectedCell.style.fontFamily = styles.fontFamily;
  selectedCell.style.fontWeight = styles.isBold ? "bold" : "normal";
  selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  selectedCell.style.textDecoration = styles.isUnderlined
    ? "underline"
    : "none";
  selectedCell.style.textAlign = styles.align;
  selectedCell.style.color = styles.textColor;
  selectedCell.style.backgroundColor = styles.backgroundColor;
}

function applyCellInfoToForm() {
  if (!state[selectedCell.id]) {
    console.log({ defaultState });
    form.reset();
    return;
  }
  syncFormOptions(state[selectedCell.id]);
  console.log("pre-edited-cell--", state[selectedCell.id]);
}
function syncFormOptions(selectedCellState) {
  for (let key in selectedCellState) {
    if (key === "isBold" || key === "isItalic" || key === "isUnderlined") {
      form[key].checked = selectedCellState[key];
    } else if (key === "innerText") {
      continue;
    } else {
      form[key].value = selectedCellState[key];
    }
  }
}
expressionInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    try {
      const expRes = eval(e.target.value);
      selectedCell.innerText = expRes;
      expressionInput.value = "";
    } catch (error) {
      console.log(
        "Invalud Expression, Please enter a valid Js Expression--",
        error.message
      );
    }
  }
});
