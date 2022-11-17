import {
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header as MantineHeader,
  MantineNumberSize,
  MediaQuery,
  Text,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { Checklist, Heart } from 'tabler-icons-react';
import ThemeToggle from './ThemeToggle';

const logo =
  'https://cdn.dribbble.com/users/1997979/screenshots/5669251/media/625a493551da2420002c7c51eff1943e.jpg';

const useStyles = createStyles((theme) => ({
  spacedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: '#F6F5F6',
    // borderBottom: '2px solid #1CAD73'
  },

  blur: {
    background: theme.colorScheme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'saturate(180%) blur(10px)',
    webkitBackdropFilter: 'saturate(180%) blur(10px)',
  },
}));

type HeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  height: number;
  padding: MantineNumberSize;
};

function Header({ opened, setOpened, ...headerProps }: HeaderProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <MantineHeader className={classes.blur} {...headerProps}>
      <Container className={classes.spacedHeader} fluid>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            color={theme.colors.gray[6]}
          />
        </MediaQuery>
        <Group spacing='xs'>
          <MediaQuery smallerThan={350} styles={{ display: 'none' }}>
            <ThemeIcon
              size={'xl'}
              // sx={(theme) => ({
              //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[0] : '#fff',
              // })}
              sx={{ background: 'none' }}
            >
              {/* <Image width={55} src={logo} alt='logo' /> */}
            </ThemeIcon>
          </MediaQuery>
          <Text
            size={30}
            weight={'bold'}
            sx={(theme) => ({
              fontFamily: 'Cambria, serif',
              borderBottom: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
              borderTop: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
            })}
          >
            THE · ALCOVE
          </Text>
        </Group>
        <Group>
          <Button variant='filled' leftIcon={<Heart strokeWidth={2} />}>
            Favourites
          </Button>
          <Button variant='filled' leftIcon={<Checklist strokeWidth={2} />}>
            Recommend a Drink
          </Button>
          <ThemeToggle />
        </Group>
      </Container>
    </MantineHeader>
  );
}

export default Header;
