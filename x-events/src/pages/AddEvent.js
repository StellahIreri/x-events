import React from 'react';
import EventForm from '../components/EventForm';
import axios from 'axios';

const AddEvent = () => {
  const handleFormSubmit = (formData) => {
    // Send the new event data to the backend API to create the event
    axios.post('/events', formData)
      .then((response) => {
        console.log('Event created:', response.data);
        // Redirect to the home page after successful event creation
        // Replace this with the desired navigation method (e.g., React Router)
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error creating event:', error);
      });
  };

  return (
    <div>
      <h2>Add Event</h2>
      <EventForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddEvent;
