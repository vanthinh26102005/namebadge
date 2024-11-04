// BadgeList.js
import Badge from './Badge';

const BadgeList = ({ attendees }) => {
  const badgesPerPage = 8;

  const chunks = [];
  for (let i = 0; i < attendees.length; i += badgesPerPage) {
    chunks.push(attendees.slice(i, i + badgesPerPage));
  }

  return (
    <div className="badge-list">
      {chunks.map((page, index) => (
        <div key={index} className="page">
          {page.map((attendee, idx) => (
            <Badge key={idx} attendee={attendee} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BadgeList;
