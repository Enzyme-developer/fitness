import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(8);

    
    //fetch exercises
  useEffect(() => {
      const fetchExercisesData = async () => {
    //initialized/emptya2 array
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
      console.log(exercises)
      console.log(exercisesData)
    };

    fetchExercisesData();
  }, [bodyPart]);

// Pagination
    
    //get inde of first exercise
const indexOfLastExercise = currentPage * exercisesPerPage;
    //get index of last exercise
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    //get the current exercises for particular page
const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
    //set the currentpage exercise to 'value'
    setCurrentPage(value);
    //scroll when page button is clicked
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

    if (!currentExercises) return <Loader />;
    

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">

    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
              
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
              
    </Stack>

          
      {/* pagination */}
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {/* if exercise is greater than 9, take it to the next page */}
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      
    </Box>
  );
};

export default Exercises;