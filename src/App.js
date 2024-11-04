// File: src/App.js
import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import BadgePreview from './components/BadgePreview';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [showBadges, setShowBadges] = useState(false);

  const handleFileUpload = (uploadedData) => {
    setData(uploadedData);
    setShowBadges(false); // Reset hiển thị khi có file mới
  };

  const handleProcess = () => {
    setShowBadges(true); // Chỉ hiển thị sau khi nhấn "Process"
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <h1>Name Badge </h1>
      <FileUploader setData={handleFileUpload} />
      {data.length > 0 && (
        <>
          <button onClick={handleProcess}>Process</button>
          {showBadges && <button onClick={handlePrint}>Print</button>}
        </>
      )}
      {showBadges && <BadgePreview data={data} />}
    </div>
  );
};

export default App;
