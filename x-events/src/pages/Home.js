import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
// import EventForm from '../components/EventForm';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend API when the component mounts
    axios.get('http://localhost:9292/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  // const handleEventCreated = (newEvent) => {
  //   // Update the list of events with the new event
  //   setEvents((prevEvents) => [...prevEvents, newEvent]);
  // };
  const handleEventDeleted = (deletedEventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== deletedEventId));
  };
  return (
    <div className="home-page">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onDelete={handleEventDeleted} />
          ))}
      </div>
    </div>
  );
};

export default Home;
