import { Card, createStyles, Group, Image, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    height: 140,
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    // cursor: 'pointer',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },
  },

  title: {
    fontWeight: 700,
    fontSize: 18,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface PairsProps {
  image: string;
  category: string;
  title: string;
  price: string;
}

function Pairs({ image, category, title, price }: PairsProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius='md' p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} width={120} height={150} />
        <div className={classes.body}>
          <Text transform='uppercase' color='dimmed' weight={700} size='xs'>
            {category}
          </Text>
          <Text className={classes.title} mt='xs' mb='md'>
            {title}
          </Text>
          <Text>{price}</Text>
        </div>
      </Group>
    </Card>
  );
}

export default Pairs;
