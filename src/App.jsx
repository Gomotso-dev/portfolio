import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {

  return (
    <ThemeProvider>
          <div>
            <Navbar />
             </div>

    </ThemeProvider>
    
  );
};

export default App;