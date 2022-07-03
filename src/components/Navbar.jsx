import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material';
// import logo from '../assets/assets/images/Logo.png'

const Navbar = () => {
  return (
      <Stack
        justifyContent='space-around'
        alignItems='center'
        sx={{ gap: { sm: '122px' }, mt: { sm: '32px', xs: '40px' }, justifyContent: 'none' }}
        px='20px'
        direction='row'
      >
      
        <Link to='/' style={{color: "#3a1212" , textDecoration : 'none' ,paddingRight:'10px'}}>
          <h3 style={{color: "#3a1212" , textDecoration : 'none' ,paddingRight:'10px'}}>GYM F</h3>
        </Link>

        <Stack
          direction='row'
          alignItems='flex-end'
          gap='12vw'
          fontSize= '24px'        
        >

          <Link to='/' style={{color: "#3a1212" ,borderBottom : '3px solid #ff2526', textDecoration : 'none' ,paddingRight:'10px'}}>Home</Link>
          <a href='#exercises' style={{ color: "#3a1212", textDecoration: 'none' }}>Exercises</a>

        </Stack>
      </Stack>
  )
}

export default Navbar