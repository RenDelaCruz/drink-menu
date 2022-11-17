import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import IndividualDrink from './IndividualDrink';
import MainMenu from './MainMenu';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          primaryColor: 'teal',
        }}
        withGlobalStyles
      >
        <Router>
          <Routes>
            <Route path='/' element={<MainMenu />} />
            <Route path='/margarita' element={<IndividualDrink />} />
            <Route path='/margarita/review' element={<ReviewForm />} />
          </Routes>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
