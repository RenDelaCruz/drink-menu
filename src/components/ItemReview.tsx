import { Button, Container, Modal, Space, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';
import ReviewForm from './ReviewForm';
import StarRating from './StartRating';

function DrinkInfo() {
  const [opened, setOpened] = useState(false);
  return (
    <Container
      size={400}
      px={10}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#ced4da',
        borderRadius: 4,
        borderColor: '#000000',
        borderStyle: 'solid',
      })}
    >
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text
            size={30}
            weight={'bold'}
            sx={(theme) => ({
              fontFamily: 'Cambria, serif',
              borderBottom: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
              borderTop: theme.colorScheme === 'dark' ? '2px dotted grey' : '2px dotted black',
            })}
          >
            DRINK · REVIEW
          </Text>
        }
      >
        <ReviewForm />
      </Modal>

      <Stack justify='space-between'>
        <Title>Reviews</Title>
        <Space h='sm' />
        <StarRating rating={5} />
        <Text>Refreshing and love the citrus flavour.</Text>
        <Space h='sm' />
        <StarRating rating={5} />
        <Text>Perfect balance of sweet, sour and spicy.</Text>
        <Space h='xl' />
        <Button onClick={() => setOpened(true)}>Leave a Review</Button>
        <Space h='xl' />
      </Stack>
    </Container>
  );
}

export default DrinkInfo;
