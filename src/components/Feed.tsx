import { Container, createStyles, Grid } from '@mantine/core';
import info from '../database/data';
import CategoryTitle from './CategoryTitle';
import DrinkCard from './DrinkCard';

const useStyles = createStyles((theme) => ({
  container: {
    marginBottom: 120,
  },
}));

type FeedProps = {};

function Feed({}: FeedProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      {info.map(({ category, drinks }) => (
        <>
          <CategoryTitle>{category}</CategoryTitle>
          <Grid>
            {drinks.map((drink) => (
              <DrinkCard
                key={drink.name}
                image={drink.image}
                category={category}
                title={drink.name}
                price={drink.price}
                rating={drink.rating}
                volume={drink.volume}
              />
            ))}
          </Grid>
        </>
      ))}
    </Container>
  );
}

export default Feed;
