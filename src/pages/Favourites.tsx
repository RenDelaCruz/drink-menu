import { Button, Center, Container, Grid, Group, Modal, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { HeartBroken } from 'tabler-icons-react';
import DrinkCard from '../components/DrinkCard';
import DrinkHeader from '../components/DrinkHeader';
import { allDrinks, Drink } from '../database/data';

function EmptyFavourites() {
  return (
    <Container mt='15vh'>
      <Center>
        <HeartBroken size={100} color='gray' />
      </Center>
      <Text c='dimmed' size={30}>
        No favourites found
      </Text>
    </Container>
  );
}

function Favourites() {
  const [opened, setOpened] = useState(false);
  const [favourites, setFavourites] = useState<Array<Drink>>([]);

  function handleClear() {
    setOpened(true);
  }

  function clearAll() {
    setFavourites([]);
    favourites.forEach((fav) => localStorage.setItem(fav.name, 'false'));
    setOpened(false);
  }

  function handleChange(title: string) {
    setFavourites((prevArray) => prevArray.filter((e) => e.name !== title));
    localStorage.setItem(title, 'false');
  }

  useEffect(() => {
    allDrinks.forEach((drink) => {
      if (
        localStorage.getItem(drink.name) == 'true' &&
        favourites.findIndex((fav) => fav.name === drink.name) === -1
      ) {
        setFavourites((prevArray) => [...prevArray, drink]);
      }
    });
  }, []);

  return (
    <>
      <DrinkHeader handleClear={handleClear} disableClear={favourites.length ? false : true} />
      <Modal opened={opened} onClose={() => setOpened(false)} title='Clear all favourites?'>
        <Group mt='xl' grow>
          <Button variant='default' onClick={() => setOpened(false)}>
            Cancel
          </Button>
          <Button variant='filled' color='red' onClick={clearAll}>
            Clear All
          </Button>
        </Group>
      </Modal>
      <div style={{ padding: 10, marginTop: 120, marginBottom: 120 }}>
        <Container>
          <Text fz={80} fw={700} tt='capitalize'>
            Favourites
          </Text>
          <Grid>
            {favourites.length ? (
              favourites.map((drink) => (
                <DrinkCard
                  key={drink.name}
                  image={drink.image}
                  category={drink.category}
                  title={drink.name}
                  price={drink.price}
                  rating={drink.rating}
                  volume={drink.volume}
                  handleChange={handleChange}
                />
              ))
            ) : (
              <EmptyFavourites />
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Favourites;

// allDrinks.forEach((drink) => {
//   if (localStorage.getItem(drink.name)) {
//     favourites.push(drink);
//   } else {
//     let index = favourites.findIndex((d) => d.name === drink.name);
//     if (index !== -1) {
//       favourites.splice(index, 1);
//     }
//   }
// });
