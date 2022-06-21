import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material';
import logo from '../assets/assets/images/Logo.png'

const Navbar = () => {
  return (
      <Stack
        justifyContent='space-around'
        sx={{ gap: { sm: '122px' }, mt: { sm: '32px', xs: '40px' }, justifyContent: 'none' }}
        px='20px'
        direction='row'
      >
      
        <Link to='/'>
          <img src={logo} alt='logo' style={{width: '48px' , height:' 48px', margin :'0 25px 0 5px'}} />
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