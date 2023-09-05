import React, { useEffect, useState } from 'react';
import './Courses.css';
import axios from 'axios';
import Select from 'react-select';

function Courses() {
  const [colleges, setColleges] = useState([]);
  const [years, setYears] = useState([]);
  const [types, setTypes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    // Fetch college data from the API
    axios.get('https://notesera-backend.onrender.com/data/all/colleges')
      .then(response => {
        const collegeData = response.data.map(college => ({
          value: college,
          label: college,
        }));
        setColleges(collegeData);
      })
      .catch(error => {
        console.error('Error fetching colleges:', error);
      });
  }, []);

  const handleCollegeChange = (selectedOption) => {
    setSelectedCollege(selectedOption);

    // Fetch years for the selected college from the API
    axios.get(`https://notesera-backend.onrender.com/data/all/${selectedOption.value}/years`)
      .then(response => {
        const yearData = response.data.map(year => ({
          value: year,
          label: year,
        }));
        setYears(yearData);
      })
      .catch(error => {
        console.error('Error fetching years:', error);
      });
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);

    // Fetch types for the selected college and year from the API
    axios.get(`https://notesera-backend.onrender.com/data/all/${selectedCollege.value}/${selectedOption.value}/types`)
      .then(response => {
        const typeData = response.data.map(type => ({
          value: type,
          label: type,
        }));
        setTypes(typeData);
      })
      .catch(error => {
        console.error('Error fetching types:', error);
      });
  };

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
  };

  const fetchSubjects = async () => {
    if (selectedCollege && selectedYear && selectedType) {
      const link = `https://notesera-backend.onrender.com/data/all/${selectedCollege.value}/${selectedYear.value}/${selectedType.value}/subjects`;
      try {
        const response = await axios.get(link);
        const subjectsData = response.data;
        setSubjects(subjectsData);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    }
  };

  const openSubjectLink = (link) => {
    window.open(link, '_blank');
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
          <button id="submitBtn" onClick={fetchSubjects}>Submit</button>
        </div>

        <div className="subjects-container">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-rectangle" onClick={() => openSubjectLink(subject.link)}>
              {subject.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;