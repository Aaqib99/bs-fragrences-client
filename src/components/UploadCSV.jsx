// // import axios from "axios";
// // import React from 'react'
// // import { MdOutlineUploadFile } from "react-icons/md";

// function convertTo2DArray(inputString) {
//   const rowsArray = inputString.split("\n");
//   while (
//     rowsArray.length > 0 &&
//     rowsArray[rowsArray.length - 1].trim() === ""
//   ) {
//     rowsArray.pop();
//   }
//   const array2D = [];
//   for (let i = 0; i < rowsArray.length; i++) {
//     const colsArray = rowsArray[i].split(",");
//     const row = [];
//     for (let j = 0; j < colsArray.length; j++) {
//       const cellValue = colsArray[j].trim();
//       if (cellValue === "") {
//         row.push("");
//       } else {
//         row.push(cellValue);
//       }
//     }
//     array2D.push(row);
//   }
//   return array2D;
// }

// function UploadCSV() {
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = async (e) => {
//         const csvContent = convertTo2DArray(e.target.result);
//         return csvContent;

//       };
//       reader.readAsText(file);
//     }
//   };
//   function openUploader() {
//     const fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = ".csv";
//     fileInput.onchange = handleFileChange;
//     fileInput.click();
//     // openColumnPopup();
//   }
// //   return (
// //     <div
// //       className="py-1 flex items-center gap-x-4 px-4"
// //       role="none"
// //       onClick={openUploader}
// //     >
// //       <label
// //         className="text-gray-900 font-medium block text-sm"
// //         role="menuitem"
// //         tabIndex="-1"
// //         id="menu-item-1"
// //       >
// //         <MdOutlineUploadFile /> Upload CSV
// //       </label>
// //     </div>
// //   );
// }

// export default UploadCSV;
