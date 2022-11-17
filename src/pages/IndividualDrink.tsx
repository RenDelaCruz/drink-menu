import { Center, Group, Image, Space, Title } from '@mantine/core';
import DrinkHeader from '../components/DrinkHeader';
import DrinkInfo from '../components/DrinkInfo';
import FoodPairs from '../components/FoodPairs';
import ItemReview from '../components/ItemReview';
import StartRating from '../components/StartRating';
import Margarita from '../images/Margarita.jpg';

function IndividualDrink() {
  return (
    <>
      <DrinkHeader addFavouriteButton backButtonPath='/' />
      <div style={{ padding: 10, marginTop: 120 }}>
        <Center>
          <Title order={1}>Margarita</Title>
        </Center>
        <Center>
          <StartRating rating={5} />
        </Center>
        <Group position='apart'>
          <Image src={Margarita} width={400} height={400} fit='contain' />
          <DrinkInfo />
          <ItemReview />
        </Group>
        <Space h='lg' />
        <FoodPairs />
      </div>
    </>
  );
}

export default IndividualDrink;
