import React, { useEffect, useState } from 'react';
import './Courses.css';
import axios from 'axios';
import Select from 'react-select';

function Courses() {
  const [colleges, setColleges] = useState([]); // State for college options
  const [years, setYears] = useState([]); // State for year options
  const [types, setTypes] = useState([]); // State for type options
  const [selectedCollege, setSelectedCollege] = useState(null); // State for selected college
  const [selectedYear, setSelectedYear] = useState(null); // State for selected year
  const [selectedType, setSelectedType] = useState(null); // State for selected type

  useEffect(() => {
    // Fetch college data from the API
    axios.get('http://localhost:5000/data/all/colleges')
      .then(response => {
        const collegeData = response.data.map(college => ({
          value: college,
          label: college,
        }));
        setColleges(collegeData); // Update state with colleges
      })
      .catch(error => {
        console.error('Error fetching colleges:', error);
      });
  }, []); // Empty dependency array to run this effect only once

  const handleCollegeChange = (selectedOption) => {
    setSelectedCollege(selectedOption); // Update selected college state

    // Fetch years for the selected college from the API
    axios.get(`http://localhost:5000/data/all/${selectedOption.value}/years`)
      .then(response => {
        const yearData = response.data.map(year => ({
          value: year,
          label: year,
        }));
        setYears(yearData); // Update state with years
      })
      .catch(error => {
        console.error('Error fetching years:', error);
      });
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption); // Update selected year state

    // Fetch types for the selected college and year from the API
    axios.get(`http://localhost:5000/data/all/${selectedCollege.value}/${selectedOption.value}/types`)
      .then(response => {
        const typeData = response.data.map(type => ({
          value: type,
          label: type,
        }));
        setTypes(typeData); // Update state with types
      })
      .catch(error => {
        console.error('Error fetching types:', error);
      });
  };

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption); // Update selected type state
  };


  const constructLink = async () => {
    if (selectedCollege && selectedYear && selectedType) {
      const link = `http://localhost:5000/data/all/${selectedCollege.value}/${selectedYear.value}/${selectedType.value}/links`;
      try {
        const response = await axios.get(link);
        const links = response.data;
        // Do something with the links, such as navigating to the first one
        if (links.length > 0) {
          window.location.href = links[0].link;
        }
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    }
  };

  return (
    <div className='main-body'>
      <div className="container">
        <h1>Get Your Notes Here!</h1>
        <div id="dropdown-container">
          <div className="dropdown">
            <label>College:</label>
            <Select
              value={selectedCollege}
              onChange={handleCollegeChange}
              options={colleges}
              placeholder="Select College"
            />
          </div>

          <div className="dropdown">
            <label>Year:</label>
            <Select
              value={selectedYear}
              onChange={handleYearChange}
              options={years}
              placeholder="Select Year"
            />
          </div>

          <div className="dropdown">
            <label>Type:</label>
            <Select
              value={selectedType}
              onChange={handleTypeChange}
              options={types}
              placeholder="Select Type"
            />
          </div>
        </div>

        <div className="button-div">
          <button id="submitBtn" onClick={constructLink}>Submit</button>
        </div>

        <div id="coursesList">
          {/* The list of matching courses will be displayed here */}
        </div>
      </div>
    </div>
  );
}

export default Courses;
