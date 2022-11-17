import { Button, Text, Center, Space } from '@mantine/core';
import ReviewForm from '../components/ReviewForm';

function ReviewDrink() {
  return (
    <>
    <Button>Main Menu</Button>
    <Center>
      <Text>Drink Reviews</Text>
    </Center>
    <Space h="xl" />
    <Center>
      <Text>Drink Name</Text>
    </Center>
    <ReviewForm/>
    </>
  );
}

export default ReviewDrink;
