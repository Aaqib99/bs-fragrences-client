function convertTo2DArray(inputString) {
  const rowsArray = inputString.split("\n");
  while (
    rowsArray.length > 0 &&
    rowsArray[rowsArray.length - 1].trim() === ""
  ) {
    rowsArray.pop();
  }
  const array2D = [];
  for (let i = 0; i < rowsArray.length; i++) {
    const colsArray = rowsArray[i].split(",");
    const row = [];
    for (let j = 0; j < colsArray.length; j++) {
      const cellValue = colsArray[j].trim();
      if (cellValue === "") {
        row.push("");
      } else {
        row.push(cellValue);
      }
    }
    array2D.push(row);
  }
  return array2D;
}

export default convertTo2DArray;

export function openUploader(setData) {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".csv";
  fileInput.onchange = (event) => handleFileChange(event, setData);
  fileInput.click();
}

export function handleFileChange(event, setData) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const csvContent = convertTo2DArray(e.target.result);
      //   return csvContent;
      setData(csvContent);
      // try {
      //     let response = await axios.post('/api/uploadCSV', { data: csvContent })
      //     let {ok}= response.data
      //     if (ok){changeLoadTable()}
      // }
      // catch (err) { console.log(err) }
    };
    reader.readAsText(file);
  }
}
// export handleFileChange;
