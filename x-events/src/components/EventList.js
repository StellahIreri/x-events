import React, { useEffect, useStates } from 'react';
import axios from 'axios';
import EventItem from './EventDetails';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend API
    axios.get('http://localhost:9292/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div>
      <h2>Events List</h2>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
