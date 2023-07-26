import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: '',
    location: '',
    organizer: '',
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
    onSubmit(formData);
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
