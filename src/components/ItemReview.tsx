import { Button, Card, createStyles, Modal, ScrollArea, Stack, Text } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import { Check, Pencil } from 'tabler-icons-react';
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

  const getFormattedDate = () => {
    const now = new Date();
    const date = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (time.charAt(0) === '0') {
      time = time.substring(1);
    }
    return `${month} ${date}, ${year} at ${time}`;
  };

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
        datetime: getFormattedDate(),
      },
    ]);
    showNotification({
      title: 'Success',
      message: 'Your review comment was added',
      icon: <Check />,
      autoClose: 7000,
    });
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
          <ReviewComment
            email='walter.white@outlook.com'
            rating={5}
            datetime='October 29, 2022 at 4:36 PM'
          >
            Refreshing and love the citrus flavour. I definitely recommend.
          </ReviewComment>
          <ReviewComment
            email='jesse.pinkman@gmail.com'
            rating={5}
            datetime='November 13, 2022 at 11:23 AM'
          >
            Perfect balance of sweet, sour and spicy
          </ReviewComment>
          {reviews.map((review, id) => (
            <ReviewComment
              key={id}
              email={review.email}
              rating={review.selectedRating}
              datetime={review.datetime}
            >
              {review.comment}
            </ReviewComment>
          ))}
        </ScrollArea.Autosize>
      </Stack>
    </Card>
  );
}

export default DrinkInfo;
