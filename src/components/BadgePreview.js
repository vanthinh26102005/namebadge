
import React from 'react'; // Import React library
import './BadgePreview.css'; // Import CSS file for styling

// BadgePreview component receives 'data' prop, which contains badge details
const BadgePreview = ({ data }) => {
  // Input: Set number of badges to display per page
  const badgesPerPage = 8; // Constant to determine number of badges per page
  
  // Process: Calculate total pages needed based on data length and badgesPerPage
  const pages = Math.ceil(data.length / badgesPerPage); // Calculate number of pages

  // Output: Render badges organized by pages
  return (
    <div className="badge-preview">
      {/* Generate pages based on calculated page count */}
      {Array.from({ length: pages }).map((_, pageIndex) => (
        <div className="badge-container" key={pageIndex}>
          {/* Slice data to get badges for the current page */}
          {data
            .slice(pageIndex * badgesPerPage, (pageIndex + 1) * badgesPerPage)
            .map((item, index) => (
              <div className="badge" key={index}>
                <img src='backtest.png' className='badge' alt="badge background" /> 
                <h2>{`${item["First Name"]} ${item["Last Name"]}`}</h2> 
                <p>{item["Job Title"]}</p> 
                <p>{item["Company"]}</p> 
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default BadgePreview; // Export BadgePreview component
