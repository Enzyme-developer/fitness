import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  //search term
  const [search, setSearch] = useState('');
  //body parts
  const [bodyParts, setBodyParts] = useState([]);


  //fetch body parts
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      //add fetched body parts to the initial 'all' using spread operator
      setBodyParts(['all', ...bodyPartsData]);
      // console.log(bodyParts)
    };

    fetchExercisesData();
  }, []);



  //handle the search functionality when search button is clicked
  const handleSearch = async () => {
    if (search) {
      //fetch all exercises no matter the search term
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercisesData)

      //filter the full exercise data based on the search term (bodypart,name,equipment,target)
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      
      //scroll to bottom when the button is clicked
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      
      //clear search field
      setSearch('');
      //populate the exercises array with the filtered data
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      {/* Introductory text */}
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">

        {/* //input field */}
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        {/* //search button */}
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>

      </Box>

      {/* scroll bar  taking in props */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>

    </Stack>
  );
};

export default SearchExercises;