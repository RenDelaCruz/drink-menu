import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import MainMenu from './MainMenu';
import IndividualDrink from './IndividualDrink';
import DrinkReview from './DrinkReview';

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
        <DrinkReview />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
