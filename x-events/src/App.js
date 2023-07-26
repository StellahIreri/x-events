import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-event">Add Event</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {/* Use Routes instead of Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
