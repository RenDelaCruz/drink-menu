import {
  ActionIcon,
  Badge,
  Card,
  Container,
  createStyles,
  Grid,
  Group,
  Image,
  Text,
} from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'tabler-icons-react';
import StarRating from './StartRating';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    transition: 'top ease 0.2s',
    position: 'relative',
    top: 0,
    '&:hover': {
      top: -5,
    },
    cursor: 'pointer',
    borderWidth: 2,
    boxShadow:
      theme.colorScheme === 'dark'
        ? '0 -2px 50px rgba(0, 0, 0, 1)'
        : '0 4px 40px rgba(0, 0, 0, 0.1)',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));

interface DrinkCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  rating: 1 | 2 | 3 | 4 | 5;
  volume: string;
}

function DrinkCard({ image, category, title, price, rating, volume }: DrinkCardProps) {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const [favourited, setFavourited] = useState(false);

  function handleClick(e: any) {
    e.stopPropagation();
    setFavourited((prevState) => !prevState);
  }

  return (
    <Grid.Col xs={12} sm={6} lg={6} xl={4}>
      <div onClick={() => navigate('/margarita')}>
        <Card withBorder p='lg' radius='md' className={classes.card}>
          <Card.Section mb='sm'>
            <Image src={image} alt={title} height={180} />
          </Card.Section>
          <Group>
            <Badge>{category}</Badge>
            <Badge>{volume}</Badge>
          </Group>
          <Text weight={300} size={30} className={classes.title} mt='xs'>
            {title}
          </Text>
          <StarRating rating={rating} />
          <Container p={0}>
            <Text c='dimmed' lineClamp={2} mt={20} size='sm'>
              {title === 'Margarita'
                ? 'A margarita is a cocktail made with a blend of tequila, lime juice, orange liqueur, and ice. It is then served in a glass with its rim covered in salt. The result is a perfectly balanced sweet and sour alcoholic beverage, perfect to beat the summer heat.'
                : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia omnis explicabo accusantium totam itaque, ipsa et architecto sapiente fugit.'}
            </Text>
          </Container>
          <Card.Section className={classes.footer}>
            <Group position='apart'>
              <Text size='xl' weight={900}>
                {price}
              </Text>
              <ActionIcon onClick={handleClick} size='lg' variant='subtle' color='red'>
                <Heart strokeWidth={1} size={90} color='red' fill={favourited ? 'red' : 'none'} />
              </ActionIcon>
            </Group>
          </Card.Section>
        </Card>
      </div>
    </Grid.Col>
  );
}

export default DrinkCard;
