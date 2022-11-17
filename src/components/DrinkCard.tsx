import { ActionIcon, Badge, Card, createStyles, Grid, Group, Image, Text } from '@mantine/core';
import { Heart } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
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

  return (
    <Grid.Col xs={12} sm={6} lg={6} xl={4}>
      <Card withBorder p='lg' radius='md' className={classes.card}>
        <Card.Section mb='sm'>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Badge>{category}</Badge>

        <Text weight={300} size={40} className={classes.title} mt='xs'>
          {title}
        </Text>

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
    </Grid.Col>
  );
}

export default DrinkCard;
