import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: '',
    location: '',
    organizer: '',
    imageUrl: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the event details from the backend API using the event ID
    axios.get(`http://localhost:9292/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
      });
  }, [id]);

  const handleEditEvent = () => {
    // Update the event details
    axios.put(`http://localhost:9292/events/${id}`, {
      title: event.title,
      description: event.description,
      start_time: event.start_time,
      end_time: event.end_time,
      location: event.location,
      organizer: event.organizer,
      imageUrl: event.imageUrl,
    })
      .then((response) => {
        // Redirect to the event details page after successful update
        navigate(`/events/${id}`);
      })
      .catch((error) => {
        console.error('Error updating event:', error);
      });
  };

  const handleInputChange = (e) => {
    // Update the corresponding state field based on the input's name attribute
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-event">
      <h2>Edit Event</h2>
      <label>Title:</label>
      <input type="text" name="title" value={event.title} onChange={handleInputChange} className="edit-event-input" />

      <label>Description:</label>
      <input type="text" name="description" value={event.description} onChange={handleInputChange} className="edit-event-input" />

      <label>Start Time:</label>
      <input type="datetime-local" name="start_time" value={event.start_time ? event.start_time.slice(0, -1) : ''} onChange={handleInputChange} className="edit-event-input" />

      <label>End Time:</label>
      <input type="datetime-local" name="end_time" value={event.end_time ? event.end_time.slice(0, -1) : ''} onChange={handleInputChange} className="edit-event-input" />

      <label>Location:</label>
      <input type="text" name="location" value={event.location} onChange={handleInputChange} className="edit-event-input" />

      <label>Organizer:</label>
      <input type="text" name="organizer" value={event.organizer} onChange={handleInputChange} className="edit-event-input" />

      <label>Image URL:</label>
      <input type="text" name="imageUrl" value={event.imageUrl} onChange={handleInputChange} className="edit-event-input" />

      <button onClick={handleEditEvent}>Save</button>
      <Link to={`/events/${id}`} className="cancel-btn">Cancel</Link>
    </div>
  );
};

export default EditEvent;
