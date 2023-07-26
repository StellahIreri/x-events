import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Kanban = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend when the component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:9292/events'); // Replace this with the appropriate API endpoint for fetching events
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div className="kanban">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <img src={event.image_url} alt={event.title} />
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Start Time: {event.start_time}</p>
          <p>End Time: {event.end_time}</p>
          <p>Location: {event.location}</p>
          <p>Organizer: {event.organizer}</p>
          <button>RSVP</button>
        </div>
      ))}
    </div>
  );
};

export default Kanban;
