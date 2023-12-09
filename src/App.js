/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Courses from './Pages/Courses/Courses.js';
import SignUp from './Pages/SignUp/SignUp';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/dashboard';
import AddData from './components/AddData/AddData';
import EditData from './components/Edit/EditData';
import VideoSection from './Pages/videoSectionSearch/videosection.jsx';
import PlaycourseVideos from './Pages/playVideoSection/playcoursevideos.jsx';
 import './Pages/playVideoSection/components/UnitDesc/unitdesc.css';
import Privacypolicy from './Pages/privacypolicy/Privacypolicy.jsx';
import Termsandconditions from './Pages/TermsAndConditions/Terms.jsx';
import VideoLogin from './Pages/VideoDashboard/videoLogin/VideoLogin.jsx';
import VideoDashboard from './Pages/VideoDashboard/dashboard/VideoDashboard.jsx';
import { checkAuthLoader } from './utils/auth.js';
import Premium from './Pages/Premium/Premium.jsx';
import NotesLogin from './components/NotesLogin/NotesLogin.jsx';
import SelectDashboard from './Pages/BlankPage/Selectdashboard.jsx';

// import axios from 'axios';




function App() {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/courses',
    element: <Courses />
  },
  {
    path:'/signup9875',
    element:<SignUp />
  },
  {
    path:"/login9874Notes",
    element:<Login />
  },
  {
    path:"/noteslogin",
    element:<NotesLogin/>
  },
  
  {
    path:"/login9874Notes/dashboard",
    element:<Dashboard />,
    loader:checkAuthLoader
  },
  {
    path:"/login9874Notes/dashboard/add-data" ,
    element:<AddData />,
    loader:checkAuthLoader
  },
  {
    path:"/login9874Notes/dashboard/edit-data/:id" ,
    element:<EditData />,
    loader:checkAuthLoader
  },
  {
    path:"/videologin" ,
    element:<VideoLogin/>
  },
  {
    path:"/video/dashboard" ,
    element:<VideoDashboard/>,
    loader:checkAuthLoader
  },
  {
    path:"/choosedashboard" ,
    element:<SelectDashboard/>,
    loader:checkAuthLoader
  },
  {
    path:"/videosection" ,
    element:<VideoSection/>
  },
  {
    path:"/playcoursevideo/:id/:name" ,
    element:<PlaycourseVideos/>
  },
  {
    path:"/privacypolicy" ,
    element:<Privacypolicy/>
  },
  {
    path:"/terms" ,
    element:<Termsandconditions/>
  },
  {
    path:"/premium" ,
    element:<Premium/>
  },

])
  

  return(
    <div className="App">
      <RouterProvider router={router} />
    </div>

  )

}

export default App;
