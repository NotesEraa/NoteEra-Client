import React, { useState } from 'react';
import './AddData.css';
import axios from 'axios';


const AddData = () => {

  const initialFormData = {
    college: '',
    year: '1',
    type: 'Notes',
    link: '',
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const addPasskey = "not40add20";
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userPasskey = window.prompt('Enter Passkey');

      if (userPasskey === addPasskey) {
        // If the passkey matches, proceed to redirect the user to the dashboard
        await axios.post('https://notesera-backend.onrender.com/data/add', formData);
        setFormData(initialFormData);
        window.alert('Data added successfully');
      } else {
        window.alert('Invalid Passkey');
      }
      
    } catch (error) {
      // Handle errors
      console.error('Error adding data:', error);
    }
  };


  return (
    <div className="add-data-container3">
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group3">
          <label htmlFor="college">College Name:</label>
          <input
            type="text"
            id="college"
            name='college'
            value={formData.college}
            onChange={handleChange}
          />
        </div>
        <div className="form-group3">
          <label htmlFor="year">Year:</label>
          <select
            type="number"
            id="year"
            name='year'
            className='select3'
            value={formData.year}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="form-group3">
          <label htmlFor="type">Type:</label>
          <select
            type="text"
            id="type"
            name='type'
            className='select3'
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Notes">Notes</option>
            <option value="Assignment">Assignment</option>
            <option value="MST1">MST1</option>
            <option value="MST2">MST2</option>
            <option value="End Sem">End Sem</option>
          </select>
        </div>
        <div className="form-group3">
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            name='link'
            value={formData.link}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br/>
      <p className="Back-Link"><a href="/login9874Notes/dashboard"> ← Back to Dashboard</a></p>
    </div>
  );
};

export default AddData;
