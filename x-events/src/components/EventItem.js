import React from 'react';

const EventItem = ({ event }) => {
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
      <p>Start Time: {event.start_time}</p>
      <p>End Time: {event.end_time}</p>
      <p>Organizer: {event.organizer}</p>
    </div>
  );
};

export default EventItem;
