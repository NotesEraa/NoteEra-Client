import React, { useEffect, useState } from 'react';
import './Courses.css';
import axios from 'axios';
import Select from 'react-select';


/* eslint-disable react-hooks/exhaustive-deps */
function Courses() {

  const [isLoadingColleges, setIsLoadingColleges] = useState(true);
  const [loadingMessages] = useState([
        "Loading your data, one piece at a time... &#x2193;",
        "Exploring subjects, just a moment longer... &#x1F468;&#x200D;&#x1F4BB;",
        "Building connections for you... &#x1F587;",
        "Crafting the perfect layout... &#x1F58C;",
        "Sorting your notes for quick access... &#x1F4DD;",
        "Getting ready for your assignments... &#x1F4C4;",
        "Hold on, we're almost there... &#x1F9D7;&#x200D;&#x2642;",
        "Preparing for the ultimate end-semester challenge? &#x1F4D6;",
        "Adding some style to your experience &#x1F3A8;",
        "Gearing up for Mid-Semester Tests... &#x1F468;&#x200D;&#x1F393;",
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const [colleges, setColleges] = useState([]);
  const [years, setYears] = useState([]);
  const [types, setTypes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const fetchColleges = async () => {
    try {
      const response = await axios.get(
        'https://notesera-backend.onrender.com/data/all/colleges'
      );
      const collegeData = response.data.map((college) => ({
        value: college,
        label: college,
      }));
      setColleges(collegeData);
      setIsLoadingColleges(false); // Set loading to false when data is loaded
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  };

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === loadingMessages.length - 1 ? 0 : prevIndex + 1
      );
    }, 800);

    // Fetch college data from the API
    fetchColleges();

    return () => {
      clearInterval(loadingInterval);
    };
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
        console.log(subjectsData);
        setSubjects(subjectsData);
        console.log(subjectsData);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    }
  };

  // Function to open the link associated with a subject
  const openSubjectLink = async (subject) => {
    if (selectedCollege && selectedYear && selectedType && subject) {
      const link = `https://notesera-backend.onrender.com/data/all/${selectedCollege.value}/${selectedYear.value}/${selectedType.value}/${subject}/links`;
      try {
        const response = await axios.get(link);
        const links = response.data;
        // Check if there are links, and if so, open the first one in a new tab
        if (links.length > 0) {
          window.open(links[0].link, '_blank');
        }
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    }
  };


  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '8px', // Customize border radius
      borderColor: '#FFD32B', // Customize border color
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Customize box shadow
      '&:hover': {
        borderColor: '#e0cd04', // Customize hover border color
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#AF69EE' : 'white', // Customize selected option background color
      color: state.isSelected ? 'white' : 'black', // Customize selected option text color
      '&:hover': {
        backgroundColor: '#AF69EE', // Customize hover background color
        color: 'white', // Customize hover text color
      },
    }),
  };


  return (
    <div className='main-body'>
      <div className="container">
      {isLoadingColleges ? (
            <div className='loading-indicator'>
            <div className='loading-text'>
              {loadingMessages.map((message, index) => (
                <div
                  key={index}
                  className={`loading-message ${
                    index === currentMessageIndex ? 'active' : ''
                  }`}
                  dangerouslySetInnerHTML={{ __html: message }}
                >
                </div>
              ))}
            </div>
          </div>
        ) : (
        <>
          <h1>Get Your Notes Here!</h1>
          <div id="dropdown-container">
            <div className="dropdown">
              {/* <label>College:</label> */}
              <Select
                value={selectedCollege}
                onChange={handleCollegeChange}
                options={colleges}
                placeholder="Select College"
                styles={customSelectStyles}
              />
            </div>
  
            <div className="dropdown">
              {/* <label>Year:</label> */}
              <Select
                value={selectedYear}
                onChange={handleYearChange}
                options={years}
                placeholder="Select Year"
                styles={customSelectStyles}
              />
            </div>
  
            <div className="dropdown">
              {/* <label>Type:</label> */}
              <Select
                value={selectedType}
                onChange={handleTypeChange}
                options={types}
                placeholder="Select Type"
                styles={customSelectStyles}
              />
            </div>
          </div>
  
          <div className="button-div">
            <button id="submitBtn" onClick={fetchSubjects}>Submit</button>
          </div>
  
          
          <div className="subjects-container">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="subject-rectangle"
                onClick={() => openSubjectLink(subject)}
              >
                {subject}
              </div>
            ))}
          </div>
        </>
        )}
      </div>
    </div>
  );
}

export default Courses;
