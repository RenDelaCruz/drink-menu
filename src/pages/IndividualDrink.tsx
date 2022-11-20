import { Container, Group, Image, Space, Text } from '@mantine/core';
import DrinkHeader from '../components/DrinkHeader';
import DrinkInfo from '../components/DrinkInfo';
import FoodPairs from '../components/FoodPairs';
import ItemReview from '../components/ItemReview';
import StartRating from '../components/StarRating';
import Margarita from '../images/Margarita.jpg';

function IndividualDrink() {
  return (
    <>
      <DrinkHeader addFavouriteButton />
      <div style={{ padding: 10, marginTop: 120, marginBottom: 60 }}>
        <Group position='apart'>
          <Container>
            <Container mb={50}>
              <Group spacing='xl'>
                <Text fz={80} fw={700} tt='capitalize'>
                  Margarita
                </Text>
                <Text fz={80} fw={400} c='dimmed'>
                  $9.10
                </Text>
              </Group>
              <StartRating rating={5} size={50} />
            </Container>
            <Group position='apart' grow>
              <Image src={Margarita} width={400} height={400} radius='md' />
              <DrinkInfo />
            </Group>
            <Space h='lg' />
            <FoodPairs />
          </Container>
          <Container>
            <ItemReview />
          </Container>
        </Group>
      </div>
    </>
  );
}

export default IndividualDrink;
