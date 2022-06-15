import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import heroBanner from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
      <Box sx={{
          mt: { lg: '212px', xs:'70px' },
          ml : {sm : '50px'}
      }} position='relative' p='20px'>
          
        <Typography color='#ff2625' fontWeight='600' fontSize='26px'>Fitness Club</Typography>
        <Typography fontWeight='700' sx={{ fontSize: { lg: '45px', xs: '40px' } }}>Sweat, smile <br /> and Repeat</Typography>
        <Typography lineHeight='30px' fontSize='22px' mb={2}>Checkout the most effective exercises</Typography>
        <Button variant="contained" color='error' href='#exercises'>Explore Exercises</Button>
        <Typography color='#ff2625' fontSize='200px' fontWeight='600'  sx={{display: { lg: 'block', xs: 'none' } ,opacity : .1} } mt='-25px'>EXERCISES</Typography>

        <img src={heroBanner} className='hero-banner-img' alt='hero banner' />
    </Box>
  )
}

export default HeroBanner