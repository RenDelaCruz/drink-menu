import { Button, Card, createStyles, Modal, ScrollArea, Stack, Text } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import { Pencil } from 'tabler-icons-react';
import ReviewComment from './ReviewComment';
import ReviewForm from './ReviewForm';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    minHeight: '871px',
    width: 350,
    top: 0,
  },
}));

function DrinkInfo() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [reviews, setReviews] = useLocalStorage<Array<any>>({ key: 'reviews', defaultValue: [] });

  function handleAddReview({
    email = null,
    comment = null,
    selectedRating = null,
  }: {
    email: any;
    comment: any;
    selectedRating: any;
  }) {
    setOpened(false);
    setReviews((prevReviews) => [
      ...prevReviews,
      {
        email,
        comment,
        selectedRating,
      },
    ]);
  }

  return (
    <Card withBorder className={classes.card}>
      <Modal opened={opened} onClose={() => setOpened(false)} title='Leave a Review'>
        <ReviewForm handleAddReview={handleAddReview} />
      </Modal>

      <Stack justify='space-between'>
        <Text fz={50} tt='capitalize' mb={10}>
          Reviews
        </Text>
        <Button leftIcon={<Pencil />} onClick={() => setOpened(true)}>
          Leave a Review
        </Button>
        <ScrollArea.Autosize maxHeight={'81.5vh'}>
          <ReviewComment email='walter.white@outlook.com' rating={5}>
            Refreshing and love the citrus flavour. I definitely recommend.
          </ReviewComment>
          <ReviewComment email='jesse.pinkman@gmail.com' rating={5}>
            Perfect balance of sweet, sour and spicy
          </ReviewComment>
          {reviews.map((review, id) => (
            <ReviewComment key={id} email={review.email} rating={review.selectedRating}>
              {review.comment}
            </ReviewComment>
          ))}
        </ScrollArea.Autosize>
      </Stack>
    </Card>
  );
}

export default DrinkInfo;
