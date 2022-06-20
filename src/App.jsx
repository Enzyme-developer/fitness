import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import {Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar />
      
       {/* Routing */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* route to particular exercise */}
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes> 
        
      <Footer />
    </Box>
  );
}

export default App;
