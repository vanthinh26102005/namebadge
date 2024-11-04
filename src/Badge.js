// Badge.js
import './badge.css';

const Badge = ({ attendee }) => {
  const { FirstName, LastName, JobTitle, Company } = attendee;

  return (
    <div className="badge">
      <img
        src="./src/background.jpg" 
        alt="Badge Logo"
        className="badge-logo"
      />
      <div className="badge-name">{`${FirstName} ${LastName}`}</div>
      <div className="badge-title">{JobTitle}</div>
      <div className="badge-company">{Company}</div>
    </div>
  );
};

export default Badge;
