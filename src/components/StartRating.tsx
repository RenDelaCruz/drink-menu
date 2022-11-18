import { Container, createStyles, useMantineTheme } from '@mantine/core';
import { FaStar } from 'react-icons/fa';

const useStyles = createStyles((theme) => ({}));

type StarRating = 1 | 2 | 3 | 4 | 5;

type StarRatingProps = {
  rating: StarRating;
};

function StarRating({ rating }: StarRatingProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const starComponents = [];
  for (let i = 0; i < rating; i++) {
    starComponents.push(
      <FaStar
        size={24}
        color={theme.colors.yellow[4]}
        style={{
          marginRight: i === 4 ? 0 : 10,
        }}
      />
    );
  }

  for (let i = 0; i < 5 - rating; i++) {
    starComponents.push(
      <FaStar
        size={24}
        color={theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[7]}
        style={{
          marginRight: i === 4 ? 0 : 10,
        }}
      />
    );
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      }}
    >
      {starComponents}
    </Container>
  );
}

export default StarRating;
