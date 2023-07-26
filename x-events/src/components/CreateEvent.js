import React from 'react';
import axios from 'axios';
import EventForm from './EventForm';

const CreateEvent = () => {
  const handleFormSubmit = (formData) => {
    axios.post('http://localhost:9292/events', formData)
      .then((response) => {
        console.log(response.data); // Log the JSON response to the console
        alert('Event created successfully!'); // Display an alert with a success message
        // You can also update the event list or do other actions based on the response data
      })
      .catch((error) => {
        console.error(error); // Log any errors to the console
        alert('An error occurred while creating the event.'); // Display an error message
      });
  };

  return (
    <div>
      <h2>Create New Event</h2>
      <EventForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateEvent;
