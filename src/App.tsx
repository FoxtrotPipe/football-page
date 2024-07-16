import './App.css'
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';

import ResponsiveAppBar from './components/ResponsiveAppBar'
import Wrapper from './components/Wrapper';
import AnimationLayout from './components/AnimationLayout';
import Footer from './components/Footer';

const theme = createTheme({
   typography: {
      fontFamily: "monospace"
   }
});

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar/>
      <Wrapper>
        <AnimationLayout>
          <Outlet/>
        </AnimationLayout>
        <Footer/>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
