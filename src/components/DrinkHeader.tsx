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
import { X } from 'tabler-icons-react';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HeartBroken, HeartOff, HeartPlus } from 'tabler-icons-react';
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
    boxShadow:
      theme.colorScheme === 'dark'
        ? '0 -2px 40px rgba(0, 0, 0, 1)'
        : '0 4px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'saturate(180%) blur(10px)',
    webkitBackdropFilter: 'saturate(180%) blur(10px)',
  },
}));

interface DrinkHeaderProps {
  addFavouriteButton?: boolean;
  handleClear?: any;
  disableClear?: boolean
}

function DrinkHeader({
  addFavouriteButton = false,
  handleClear = null,
  disableClear = false,
  ...headerProps
}: DrinkHeaderProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const navigate = useNavigate();

  const [favourited, setFavourited] = useLocalStorage({
    key: 'Margarita',
    defaultValue: localStorage.getItem('Margarita') || false,
  });

  function toggleFavourite() {
    setFavourited((prevState) => !prevState);
  }

  return (
    <MantineHeader className={classes.blur} {...headerProps} height={90} fixed>
      <Container className={classes.spacedHeader} fluid>
        <Group spacing='xs'>
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Button leftIcon={<ArrowLeft strokeWidth={2} />} onClick={() => navigate(-1)}>
              Back
            </Button>
          </MediaQuery>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <ActionIcon size={'lg'} variant='filled' color='teal' onClick={() => navigate(-1)}>
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
                {favourited ? (
                  <Button
                    variant='filled'
                    leftIcon={<HeartOff strokeWidth={2} />}
                    onClick={toggleFavourite}
                  >
                    Remove from Favourites
                  </Button>
                ) : (
                  <Button
                    variant='filled'
                    leftIcon={<HeartPlus strokeWidth={2} />}
                    onClick={toggleFavourite}
                  >
                    Add to Favourites
                  </Button>
                )}
              </MediaQuery>
              <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <ActionIcon size={'lg'} variant='filled' color='teal' onClick={toggleFavourite}>
                  {favourited ? <HeartOff strokeWidth={2} /> : <HeartPlus strokeWidth={2} />}
                </ActionIcon>
              </MediaQuery>
            </>
          )}
          {handleClear !== null && (
            <Button variant='filled' leftIcon={<X strokeWidth={2} />} onClick={handleClear} disabled={disableClear}>
              Clear All Favourites
            </Button>
          )}
          <ThemeToggle />
        </Group>
      </Container>
    </MantineHeader>
  );
}

export default DrinkHeader;
