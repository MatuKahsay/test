import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import HousingScreen from './screens/HousingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import MapScreen from './screens/MapScreen'; // Ensure you have this import for your Map component

function App() {
  return (
    <Router>
      <Routes>
        {/* Separate routes for LandingPage and MapScreen */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/map' element={<MapScreen />} />

        {/* Layout for pages with Header and Footer */}
        <Route path='/home' element={
          <>
            <Header />
            <main className='py-3'>
              <Container>
                <HomeScreen />
              </Container>
            </main>
            <Footer />
          </>
        } />

        <Route path='/housing/:id' element={
          <>
            <Header />
            <main className='py-3'>
              <Container>
                <HousingScreen />
              </Container>
            </main>
            <Footer />
          </>
        } />

        {/* Repeat similar structure for other pages like Login, Register, Profile */}
        <Route path='/login' element={
          <>
            <Header />
            <main className='py-3'>
              <Container>
                <LoginScreen />
              </Container>
            </main>
            <Footer />
          </>
        } />

        <Route path='/register' element={
          <>
            <Header />
            <main className='py-3'>
              <Container>
                <RegisterScreen />
              </Container>
            </main>
            <Footer />
          </>
        } />

        <Route path='/profile' element={
          <>
            <Header />
            <main className='py-3'>
              <Container>
                <ProfileScreen />
              </Container>
            </main>
            <Footer />
          </>
        } />

        {/* If you have more routes, add them here following the same structure */}
      </Routes>
    </Router>
  );
}

export default App;
