import { AppShell } from '@mantine/core';
import { useState } from 'react';
import CategoryNavigation from '../components/CategoryNavigation';
import Feed from '../components/Feed';
import Header from '../components/Header';

function MainMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      fixed
      header={<Header opened={opened} setOpened={setOpened} height={90} padding='md' />}
      navbar={
        <CategoryNavigation
          padding='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 300, lg: 400 }}
        />
      }
    >
      <Feed />
    </AppShell>
  );
}

export default MainMenu;
