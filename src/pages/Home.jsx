import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  //exercises
  const [exercises, setExercises] = useState([]);
  //body part
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      {/* Banner */}
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} /> 
    </Box>
  );
};

export default Home;