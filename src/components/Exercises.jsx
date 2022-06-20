import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

//bring props from home page
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  //state for pages
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(8);

    
    //fetch exercises
  useEffect(() => {
      const fetchExercisesData = async () => {
    //initialized/emptya2 array
      let exercisesData = [];

      //all exercises
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      //exercisess for specific body part
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
      // console.log(exercises)
      // console.log(exercisesData)
    };

    fetchExercisesData();
  }, [bodyPart]);

// Pagination
    
    //get inde of last exercise
const indexOfLastExercise = currentPage * exercisesPerPage;
    //get index of first exercise
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

    <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
              
        {/* map current exercies i.e paginated exercises */}
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
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