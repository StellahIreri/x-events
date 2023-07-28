import React from 'react';
import EventForm from '../components/EventForm';
import '/home/stela/x-events/src/App.css'; // Import the CSS file

const AddEvent = () => {
  const handleEventCreated = (newEvent) => {
    // Handle event creation logic here
    console.log('Event created:', newEvent);
    // Redirect to the home page or do any other navigation as needed
    window.location.href = '/';
  };

  return (
    <div className="add-event-container">
      <h2>Add Event</h2>
      <div className="add-event-form">
        <EventForm onEventCreated={handleEventCreated} />
      </div>
    </div>
  );
};

export default AddEvent;
