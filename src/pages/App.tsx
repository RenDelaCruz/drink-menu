import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import MainMenu from './MainMenu';
import IndividualDrink from './IndividualDrink';

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
          primaryColor: 'yellow',
        }}
        withGlobalStyles
      >
        <MainMenu />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
