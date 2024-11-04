
import React from 'react'; 
import * as XLSX from 'xlsx'; // import lib xlsx to read file

// FileUploader component accepts a prop 'setData' to send data back to parent component
const FileUploader = ({ setData }) => {
 
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader(); // Create a new FileReader instance

    // Define what happens when the file is read
    reader.onload = (event) => {
      const binaryStr = event.target.result; // Get the binary string from the file
      const workbook = XLSX.read(binaryStr, { type: "binary" }); // Read the binary string as a workbook
      const sheetName = workbook.SheetNames[0]; // Get the first sheet name
      const worksheet = workbook.Sheets[sheetName]; // Get the corresponding worksheet
      const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert the worksheet to JSON
      setData(jsonData); // Send the JSON data back to the parent component (App.js)
    };

    reader.readAsBinaryString(file); // Start reading the file as a binary string
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} /> {/* File input to upload files */}
    </div>
  );
};

export default FileUploader; 
