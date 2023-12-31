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
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events/:id/edit" element={<EditEvent />} />
          <Route path="/events" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
