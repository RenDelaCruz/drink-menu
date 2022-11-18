import {
  ActionIcon,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header as MantineHeader,
  MantineNumberSize,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checklist, Heart } from 'tabler-icons-react';
import ThemeToggle from './ThemeToggle';

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
    boxShadow:
      theme.colorScheme === 'dark'
        ? '0 -2px 40px rgba(0, 0, 0, 1)'
        : '0 4px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'saturate(180%) blur(10px)',
    webkitBackdropFilter: 'saturate(180%) blur(10px)',
  },
}));

type MainHeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  height: number;
  padding: MantineNumberSize;
};

function MainHeader({ opened, setOpened, ...headerProps }: MainHeaderProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const navigate = useNavigate();

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
          <Text
            size={30}
            weight={'bold'}
            sx={(theme) => ({
              fontFamily: 'Cambria, serif',
              borderBottom: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
              borderTop: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
              [theme.fn.largerThan('sm')]: { marginLeft: 50 },
            })}
          >
            THE · ALCOVE
          </Text>
        </Group>
        <Group>
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Group>
              <Button
                variant='filled'
                leftIcon={<Heart strokeWidth={2} />}
                onClick={() => navigate('/favourites')}
              >
                Favourites
              </Button>
              <Button
                variant='filled'
                leftIcon={<Checklist strokeWidth={2} />}
                onClick={() => navigate('/recommend')}
              >
                Recommend a Drink
              </Button>
            </Group>
          </MediaQuery>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Group>
              <ActionIcon size={'lg'} variant='filled' color='teal'>
                <Heart strokeWidth={2} />
              </ActionIcon>
              <ActionIcon
                size={'lg'}
                onClick={() => navigate('/recommend')}
                variant='filled'
                color='teal'
              >
                <Checklist strokeWidth={2} />
              </ActionIcon>
            </Group>
          </MediaQuery>
          <ThemeToggle />
        </Group>
      </Container>
    </MantineHeader>
  );
}

export default MainHeader;
