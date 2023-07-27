import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const EventCard = ({ event, onDelete }) => {
  const [rsvpStatus, setRsvpStatus] = useState(false);

  const handleRsvpClick = () => {
    setRsvpStatus((prevStatus) => !prevStatus);
  };

  // const handleDelete = () => {
  //   axios.delete(`http://localhost:9292/events/${event.id}`)
  //     .then(() => {
  //       onDelete(event.id); // Update the events list in the parent component after successful delete
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting event:', error);
  //     });
  // };

  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`} className="view-details-btn">View Details</Link>
      <button className={rsvpStatus ? 'rsvp-btn rsvp-btn-active' : 'rsvp-btn'} onClick={handleRsvpClick}>
        {rsvpStatus ? 'RSVPed' : 'RSVP'}
      </button>
      {/* <button className="delete-btn" onClick={handleDelete}>Delete</button> */}
    </div>
  );
};

export default EventCard;
