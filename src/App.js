/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses/Courses.jsx';
import SignUp from './Pages/SignUp/SignUp';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/dashboard';
import AddData from './components/AddData/AddData';
import EditData from './components/Edit/EditData';
 

// import axios from 'axios';




function App() {
  
  

  return(
    <div className="App">
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup9875" element={<SignUp />} />
        <Route path="/login9874Notes" element={<Login />} />
        <Route path="/login9874Notes/dashboard" element={<Dashboard />} />
        <Route path="/login9874Notes/dashboard/add-data" element={<AddData />} />
        <Route path="/login9874Notes/dashboard/edit-data/:id" element={<EditData />} />
      </Routes>
    </Router>

    </div>

  )

}

export default App;
