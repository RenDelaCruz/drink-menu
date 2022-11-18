import { Container, Group, Text } from '@mantine/core';
import Enchiladas from '../images/Enchiladas.jpg';
import JerkChicken from '../images/JerkChicken.jpg';
import ShrimpCakes from '../images/ShrimpCakes.jpg';
import Pairs from './Pairs';

function FoodPairs() {
  return (
    <>
      <Text fz={50} tt='capitalize' mb={10}>
        Food Pairings
      </Text>
      <Container>
        <Group position='center' grow>
          <Pairs title='Jerk Chicken Sticks' category='Meat' image={JerkChicken} price='$8.00' />
          <Pairs
            title='Key West Shrimp Cakes'
            category='Seafood'
            image={ShrimpCakes}
            price='$5.00'
          />
          <Pairs title='Enchiladas' category='Mexican' image={Enchiladas} price='$6.00' />
        </Group>
      </Container>
    </>
  );
}

export default FoodPairs;
