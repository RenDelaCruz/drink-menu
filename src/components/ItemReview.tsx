import { Button, Card, createStyles, Modal, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import ReviewComment from './ReviewComment';
import ReviewForm from './ReviewForm';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    height: '100vh',
    width: 350,
  },
}));

function DrinkInfo() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Card withBorder className={classes.card}>
      <Modal opened={opened} onClose={() => setOpened(false)} title='Leave a Review'>
        <ReviewForm />
      </Modal>

      <Stack justify='space-between'>
        <Text fz={50} tt='capitalize' mb={10}>
          Reviews
        </Text>
        <Button onClick={() => setOpened(true)}>Leave a Review</Button>
        <ReviewComment email='walter.white@outlook.com' rating={5}>
          Refreshing and love the citrus flavour. I definitely recommend.
        </ReviewComment>
        <ReviewComment email='jesse.pinkman@gmail.com' rating={5}>
          Perfect balance of sweet, sour and spicy
        </ReviewComment>
      </Stack>
    </Card>
  );
}

export default DrinkInfo;
