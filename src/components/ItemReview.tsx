import { Button, Container, Image, Modal, Space, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stars from '../images/Stars.jpg';
import ReviewForm from './ReviewForm';

function DrinkInfo() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  return (
    <Container
      size={400}
      px={10}
      sx={{
        backgroundColor: '#ced4da',
        borderRadius: 4,
        borderColor: '#000000',
        borderStyle: 'solid',
      }}
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
        <Image src={Stars} width={200} height={50} />
        <Text>Refreshing and love the citrus flavour.</Text>
        <Space h='sm' />
        <Image src={Stars} width={200} height={50} />
        <Text>Perfect balance of sweet, sour and spicy.</Text>
        <Space h='xl' />
        <Button onClick={() => setOpened(true)}>Leave a Review</Button>
        <Space h='xl' />
      </Stack>
    </Container>
  );
}

export default DrinkInfo;
