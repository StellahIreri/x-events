import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetails = ({ match }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch the specific event details from the backend API based on the URL parameter (event ID)
    axios.get(`/events/${match.params.id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
      });
  }, [match.params.id]);

  return (
    <div>
      {event ? (
        <div>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Location: {event.location}</p>
          <p>Start Time: {event.start_time}</p>
          <p>End Time: {event.end_time}</p>
          <p>Organizer: {event.organizer}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;
