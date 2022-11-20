import { createStyles, Switch, useMantineColorScheme } from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  switch: {
    marginTop: -14,
    marginLeft: -8,
  },
}));

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  // Update browser meta theme-color on button toggle
  const themeColor = document.querySelector("meta[name='theme-color']");
  themeColor?.setAttribute('content', colorScheme === 'dark' ? '#158255' : '#1CAD72');

  return (
    <Switch
      className={classes.switch}
      checked={colorScheme === 'dark'}
      radius='xl'
      onChange={() => toggleColorScheme()}
      size='xl'
      onLabel={<Sun color={'white'} size={20} />}
      offLabel={<MoonStars color={'teal'} size={20} />}
    />
  );
}

export default ThemeToggle;
