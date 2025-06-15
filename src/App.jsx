// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Quizz from './components/Quizz';
import Hero from './components/Hero';
import Feature from './components/Feature';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Testimonial from './components/Testimonial';
import CompletionCertificate from './pages/CompletionCertificate';
//import Certificate from './components/Certificate';
import StartQuiz from './pages/StartQuiz';
import VantaBirds from './components/VantaBirds';



const Home = () => (
  <>
    <VantaBirds /> {/* ✅ Birds  effect applied here */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Testimonial />
      <Footer />
    </div>
  </>
);

const App = () => (
  <BrowserRouter>
    <main className="min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quizz />} />
       <Route path="/start" element={<StartQuiz />} />

<Route path="/completion-certificate" element={<CompletionCertificate />} />

        {/* <Route path="/certificate/:name" element={<Certificate />} /> */}
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
