import { Image, Center, Group, Button, Title, } from '@mantine/core';
import DrinkInfo from '../components/DrinkInfo';
import ItemReview from '../components/ItemReview';
import Margarita from '../Images/Margarita.jpg';
import Stars from '../Images/Stars.jpg';

function IndividualDrink() {
  return (
    <div style={{padding:10}}>
      <Group position='apart'>
        <Button>
          Back
        </Button>
        <Button>
          Favourite
        </Button>
      </Group>
      <Center>
        <Title order={1}>Margarita</Title>
      </Center>
      <Center>
        <Image
          src={Stars}
          width={200}
          height={100} 
        />
      </Center>
      <Group position="apart">
        <Image 
          src={Margarita}
          width={400}
          height={400}
        />
        <DrinkInfo />
        <ItemReview />
      </Group>
      </div>
  );
}

export default IndividualDrink;
