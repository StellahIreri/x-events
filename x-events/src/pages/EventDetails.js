import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function

  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch the event details from the backend API using the event ID
    axios
      .get(`http://localhost:9292/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:9292/events/${id}`)
      .then(() => {
        // Navigate back to the events list after successful deletion
        navigate('/events');
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });
  };

  if (!event) {
    return <div>Loading..</div>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Start Time: {new Date(event.start_time).toLocaleString()}</p>
      <p>End Time: {new Date(event.end_time).toLocaleString()}</p>
      <p>Location: {event.location}</p>
      <p>Organizer: {event.organizer}</p>
      {event.imageUrl && <img src={event.imageUrl} alt={event.title} />}
      <div className="edit-delete-buttons">

      <button className="edit-btn" onClick={() => navigate(`/events/${id}/edit`)}>Edit Event</button>
      <button className="delete-btn" onClick={handleDelete}>Delete Event</button>
      </div>

    </div>
  );
};

export default EventDetails;
