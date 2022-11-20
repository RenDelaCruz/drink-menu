import { Badge, Box, Card, createStyles, Flex, Grid, Group, Image, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    height: 200,
    width: 1000,
    transition: 'top ease 0.2s',
    position: 'relative',
    marginBottom: 15,
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

  body: {
    padding: theme.spacing.md,
  },

  label: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
  },
}));

function FlavourBox({ flavour, percentage, isSelected }: any) {
  const { classes } = useStyles();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? isSelected
              ? theme.fn.rgba(theme.colors.teal[9], 0.5)
              : theme.colors.dark[6]
            : isSelected
            ? theme.colors.teal[0]
            : theme.colors.gray[1],
        textAlign: 'center',
        padding: theme.spacing.sm,
        borderRadius: theme.radius.md,
        color: isSelected
          ? theme.colorScheme === 'dark'
            ? theme.colors.teal[5]
            : theme.colors.teal[7]
          : undefined,
        // border: isSelected ? '1px solid' : undefined,

        '&:hover': {
          backgroundColor: isSelected
            ? theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors.teal[7], 0.5)
              : theme.colors.teal[1]
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2],
        },
      })}
    >
      <Text className={classes.label}>{flavour}</Text>
      <Text fw={isSelected ? 900 : 700}>{percentage}%</Text>
    </Box>
  );
}

interface RecommendationViewProps {
  image: string;
  category: string;
  title: string;
  price: string;
  rating: 1 | 2 | 3 | 4 | 5;
  percentages: {
    bitter: number;
    sweet: number;
    sour: number;
    spicy: number;
    fruity: number;
    smoky: number;
  };
  selected: any;
}

export function RecommendationView({
  image,
  category,
  title,
  price,
  percentages,
  rating,
  selected,
}: RecommendationViewProps) {
  const { classes } = useStyles();

  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/margarita')}>
      <Card withBorder radius='md' p={0} className={classes.card}>
        <Group noWrap spacing={30}>
          <Image src={image} height={200} width={250} />
          <div className={classes.body}>
            <Grid gutter='xl'>
              <Grid.Col span={5} w={400}>
                <div>
                  <Badge>{category}</Badge>
                  <Text weight={300} size={30} mt='xs'>
                    {title}
                  </Text>
                  <StarRating rating={rating} />
                  <br />
                  <Text size='xl' weight={900}>
                    {price}
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span='auto'>
                <Flex direction={'column'} justify='space-around' sx={{ height: '100%' }}>
                  <FlavourBox
                    flavour='Bitterness'
                    percentage={percentages.bitter}
                    isSelected={selected.bitter}
                  />
                  <FlavourBox
                    flavour='Sweetness'
                    percentage={percentages.sweet}
                    isSelected={selected.sweet}
                  />
                </Flex>
              </Grid.Col>
              <Grid.Col span={'auto'}>
                <Flex direction={'column'} justify='space-around' sx={{ height: '100%' }}>
                  <FlavourBox
                    flavour='Sourness'
                    percentage={percentages.sour}
                    isSelected={selected.sour}
                  />
                  <FlavourBox
                    flavour='Spiciness'
                    percentage={percentages.spicy}
                    isSelected={selected.spicy}
                  />
                </Flex>
              </Grid.Col>
              <Grid.Col span='auto'>
                <Flex direction={'column'} justify='space-around' sx={{ height: '100%' }}>
                  <FlavourBox
                    flavour='Fruitiness'
                    percentage={percentages.fruity}
                    isSelected={selected.fruity}
                  />
                  <FlavourBox
                    flavour='Smokiness'
                    percentage={percentages.smoky}
                    isSelected={selected.smoky}
                  />
                </Flex>
              </Grid.Col>
            </Grid>
          </div>
        </Group>
      </Card>
    </div>
  );
}

export default RecommendationView;
