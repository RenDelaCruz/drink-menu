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
  themeColor?.setAttribute('content', colorScheme === 'dark' ? '#1A1B1E' : '#FFFFFF');

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

    // <ActionIcon
    //   variant='filled'
    //   color={colorScheme === 'dark' ? '' : 'teal'}
    //   onClick={() => toggleColorScheme()}
    //   size='lg'
    //   // sx={(theme) => ({
    //   //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    //   //   color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[6],
    //   // })}
    // >
    //   {colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
    // </ActionIcon>
  );
}

export default ThemeToggle;
