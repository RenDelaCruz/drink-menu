import { Button, Center, Group, Image, Space, Title } from '@mantine/core';
import DrinkInfo from '../components/DrinkInfo';
import FoodPairs from '../components/FoodPairs';
import ItemReview from '../components/ItemReview';
import Margarita from '../images/Margarita.jpg';
import Stars from '../images/Stars.jpg';

function IndividualDrink() {
  return (
    <div style={{ padding: 10 }}>
      <Group position='apart'>
        <Button>Back</Button>
        <Button>Favourite</Button>
      </Group>
      <Center>
        <Title order={1}>Margarita</Title>
      </Center>
      <Center>
        <Image src={Stars} width={200} height={100} />
      </Center>
      <Group position='apart'>
        <Image src={Margarita} width={400} height={400} fit='contain' />
        <DrinkInfo />
        <ItemReview />
      </Group>
      <Space h='lg' />
      <FoodPairs />
    </div>
  );
}

export default IndividualDrink;
