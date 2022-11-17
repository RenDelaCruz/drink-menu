import { Container, List, Space, Text } from '@mantine/core';

function DrinkInfo() {
  return (
    <Container size={500} px={10}>
      <List size='xl'>
        <List.Item>9 Oz Total</List.Item>
        <List.Item>2 Oz Tequila</List.Item>
        <List.Item>1 Oz Triple Sec (Orange Liquer)</List.Item>
        <List.Item>1 Oz Lime Juice</List.Item>
        <List.Item>Ice</List.Item>
        <List.Item>1 Lime Wedge</List.Item>
        <List.Item>Coarse Salt on Rim</List.Item>
      </List>
      <Space h='xl' />
      <Text fz='lg'>
        A margarita is a cocktail made with a blend of tequila, lime juice, orange liqueur, and ice.
        It is then served in a glass with its rim covered in salt. The result is a perfectly
        balanced sweet and sour alcoholic beverage, perfect to beat the summer heat.
      </Text>
    </Container>
  );
}

export default DrinkInfo;
