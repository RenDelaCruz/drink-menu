import { AppShell } from '@mantine/core';
import { useState } from 'react';
import CategoryNavigation from '../components/CategoryNavigation';
import Header from '../components/Header';

function MainMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      fixed
      header={<Header opened={opened} setOpened={setOpened} height={70} padding='md' />}
      navbar={
        <CategoryNavigation
          padding='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 300, lg: 400 }}
        />
      }
    >
      TODO: Drink cards here
    </AppShell>
  );
}

export default MainMenu;
