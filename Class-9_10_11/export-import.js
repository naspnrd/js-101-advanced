const download = document.getElementById("download");
const upload = document.getElementById("upload");

download.addEventListener("click", () => {
  // download the JSON File, .json extension
  // Blob, type: plain/text, application/json
  const blob = new Blob([JSON.stringify(state)], { type: "application/json" });
  let url = URL.createObjectURL(blob);

  let link = document.createElement("a");
  link.href = url;
  link.download = "spreadsheet.json";
  link.click();
});

upload.addEventListener("change", (event) => {
  let file = event.target.files[0];
  console.log(file);
  if (file.type !== "application/json") {
    alert("Please upload json file only");
  }

  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const fileData = JSON.parse(event.target.result);
    console.log({ fileData });
    // HW : Fill all the cells of the sheet with the fileData
    state = fileData;

    for (let cellId in fileData) {
      let cell = document.getElementById(cellId);
      if (cell) {
        cell.innerText = fileData[cellId].innerText || "";
        applyStylesToCell(cell, fileData[cellId]);
      }
    }
  };
  fileReader.onerror = function (event) {
    console.log("Error occurred");
  };
  fileReader.readAsText(file);
});

function applyStylesToCell(cell, styles) {
  cell.style.fontSize = styles.fontSize + "px";
  cell.style.fontFamily = styles.fontFamily;
  cell.style.fontWeight = styles.isBold ? "bold" : "normal";
  cell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  cell.style.textDecoration = styles.isUnderlined ? "underline" : "none";
  cell.style.textAlign = styles.align;
  cell.style.color = styles.textColor;
  cell.style.backgroundColor = styles.backgroundColor;
}

/* 
HW: Implement multisheet functionlity

AllSheets = {
    sheet1: state1,
    sheet2: state2,
    sheet3: state3
}

every sheet is like a radio button because you can select only one at a time out of all given sheet
*/

// =========================
// const download = document.getElementById("download");
// const upload = document.getElementById("upload");

// download.addEventListener("click", () => {
//   let stateArray = [{ ...state }];
//   // Convert state data to a worksheet
//   const ws = XLSX.utils.json_to_sheet(stateArray);

//   // Convert worksheet to CSV format
//   const csv = XLSX.utils.sheet_to_csv(ws);

//   // Create a Blob and download the CSV file
//   const blob = new Blob([csv], { type: "text/csv" });

//   let url = URL.createObjectURL(blob);
//   let link = document.createElement("a");
//   link.href = url;
//   link.download = "spreadsheet.csv";
//   link.click();
// });

// // Make sure to include the xlsx library in your project
// // Add this in your HTML file: <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
