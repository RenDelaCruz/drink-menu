import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Group,
  Header as MantineHeader,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HeartPlus } from 'tabler-icons-react';
import ThemeToggle from './ThemeToggle';

const useStyles = createStyles((theme) => ({
  spacedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  blur: {
    background: theme.colorScheme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'saturate(180%) blur(10px)',
    webkitBackdropFilter: 'saturate(180%) blur(10px)',
  },
}));

function DrinkHeader({ addFavouriteButton = false, backButtonPath = '/', ...headerProps }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <MantineHeader className={classes.blur} {...headerProps} height={90} fixed>
      <Container className={classes.spacedHeader} fluid>
        <Group spacing='xs'>
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Button leftIcon={<ArrowLeft strokeWidth={2} />} onClick={() => navigate('/')}>
              Back
            </Button>
          </MediaQuery>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <ActionIcon size={'lg'} variant='filled' color='teal' onClick={() => navigate('/')}>
              <ArrowLeft strokeWidth={2} />
            </ActionIcon>
          </MediaQuery>

          <Text
            size={30}
            weight={'bold'}
            sx={(theme) => ({
              fontFamily: 'Cambria, serif',
              borderBottom: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
              borderTop: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
              [theme.fn.smallerThan('sm')]: { marginLeft: 20 },
              [theme.fn.largerThan('sm')]: { marginLeft: 50 },
            })}
          >
            THE · ALCOVE
          </Text>
        </Group>
        <Group>
          {addFavouriteButton && (
            <>
              <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <Button variant='filled' leftIcon={<HeartPlus strokeWidth={2} />}>
                  Add to Favourites
                </Button>
              </MediaQuery>
              <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <ActionIcon size={'lg'} variant='filled' color='teal'>
                  <HeartPlus strokeWidth={2} />
                </ActionIcon>
              </MediaQuery>
            </>
          )}
          <ThemeToggle />
        </Group>
      </Container>
    </MantineHeader>
  );
}

export default DrinkHeader;
