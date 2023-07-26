import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  

  useEffect(() => {
    // Fetch the event data based on the event ID
    axios.get(`http://localhost:9292/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
      });
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
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
    </div>
  );
};

export default EventDetails;
