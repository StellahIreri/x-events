import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const EventCard = ({ event }) => {

    const [rsvpStatus, setRsvpStatus] = useState(false);

  const handleRsvpClick = () => {
    // Toggle the RSVP status when the button is clicked
    setRsvpStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="event-card">
      <img src={event.image_url} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`} className="view-details-btn">View Details</Link>
      <button className={rsvpStatus ? 'rsvp-btn rsvp-btn-active' : 'rsvp-btn'} onClick={handleRsvpClick}>
        {rsvpStatus ? 'RSVPed' : 'RSVP'}
      </button>
    </div>
  );
};

export default EventCard;
