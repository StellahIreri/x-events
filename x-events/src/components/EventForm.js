import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: '',
    location: '',
    organizer: '',
    image_url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the backend to create the event
    axios.post('http://localhost:9292/events', formData)
      .then((response) => {
        // Handle successful event creation
        onEventCreated(response.data); // Add the new event to the list of events
        setFormData({ // Clear the form after successful submission
          title: '',
          description: '',
          start_time: '',
          end_time: '',
          location: '',
          organizer: '',
          image_url: '',
        });
      })
      .catch((error) => {
        // Handle error in event creation
        console.error('Error creating event:', error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      <label>Start Time:</label>
      <input type="datetime-local" name="start_time" value={formData.start_time} onChange={handleChange} required />

      <label>End Time:</label>
      <input type="datetime-local" name="end_time" value={formData.end_time} onChange={handleChange} required />

      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} required />

      <label>Organizer:</label>
      <input type="text" name="organizer" value={formData.organizer} onChange={handleChange} required />

      <label>Image URL:</label>
      <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} required />

      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
