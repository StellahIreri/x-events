import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import EventCard from '../components/EventCard';

const events = [
    {
      id: 1,
      title: 'WRC',
      description: 'Rally in Naivasha',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2LrPs1F9_AA9ExgzJN4HmOOCAQv9hxDClQ&usqp=CAU', 
    },
    {
      id: 2,
      title: 'Koroga Festival',
      description: 'Capital FM music concert',
      imageUrl: 'https://nairobinow.files.wordpress.com/2020/02/koroga-festival-final.jpg', 
    },
  ];
  
  const Home = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      // Fetch events from the backend when the component mounts
      fetch('http://localhost:9292/events')
        .then((response) => response.json())
        .then((data) => setEvents(data))
        .catch((error) => console.error('Error fetching events:', error));
    }, []);
    return (
      <div>
        <h1>Upcoming Events</h1>
        <div className="event-list">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div>
      <h1>Events App</h1>
      <EventList />
    </div>
      </div>
    );
  };



export default Home;

