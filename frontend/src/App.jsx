import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes> {/* Changed from BrowserRouter to Routes */}
        <Route path='/' element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
