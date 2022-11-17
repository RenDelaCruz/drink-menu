import { ActionIcon, Badge, Card, createStyles, Grid, Group, Image, Text } from '@mantine/core';
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
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
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
}

function DrinkCard({ image, category, title, price }: DrinkCardProps) {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  return (
    <Grid.Col xs={12} sm={6} lg={6} xl={4}>
      <div onClick={() => navigate('/margarita')}>
        <Card withBorder p='lg' radius='md' className={classes.card}>
          <Card.Section mb='sm'>
            <Image src={image} alt={title} height={180} />
          </Card.Section>

          <Badge>{category}</Badge>

          <Text weight={300} size={40} className={classes.title} mt='xs'>
            {title}
          </Text>
          <StarRating rating={4} />

          {/* <Group mt='lg'>
          <i className='fa-solid fa-martini-glass-citrus'></i>
        </Group> */}

          <Card.Section className={classes.footer}>
            <Group position='apart'>
              <Text size='xl' weight={900}>
                {price}
              </Text>
              <ActionIcon>
                <Heart strokeWidth={1} color='red' />
              </ActionIcon>
            </Group>
          </Card.Section>
        </Card>
      </div>
    </Grid.Col>
  );
}

export default DrinkCard;
