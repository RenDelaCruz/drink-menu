import { Container, createStyles, Grid } from '@mantine/core';
import CategoryTitle from './CategoryTitle';
import DrinkCard from './DrinkCard';

const useStyles = createStyles((theme) => ({
  container: {
    // marginTop: 20,
  },
}));

type FeedProps = {};

const titles = ['Cocktails', 'Beer', 'Wine', 'Spirits', 'Liqueurs'];

const drinkExample = (
  <DrinkCard
    image='https://www.liquor.com/thmb/Lj4-pg4Gn-4t4qJfm4BTYVNMVMY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__04__23143458__daiquiri-720x720-recipe-09f1d5665a794eddbbfb997876736136.jpg'
    category='Cocktails'
    title='Daiquiri'
    price='$9.05'
  />
);

function Feed({}: FeedProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <CategoryTitle>Cocktails</CategoryTitle>
      <Grid>
        {drinkExample}
        {drinkExample}
        {drinkExample}
      </Grid>

      <CategoryTitle>Beer</CategoryTitle>
      <Grid>
        {drinkExample}
        {drinkExample}
        {drinkExample}
      </Grid>

      <CategoryTitle>Wine</CategoryTitle>
      <Grid>
        {drinkExample}
        {drinkExample}
        {drinkExample}
      </Grid>

      <CategoryTitle>Spirits</CategoryTitle>
      <CategoryTitle>Liqueurs</CategoryTitle>
    </Container>
  );
}

export default Feed;
