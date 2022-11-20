import { createStyles, Card, Image, Text, Group, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    height: 200,
    width: 1000,
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
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface RecommendationViewProps {
  image: string;
  category: string;
  title: string;
  price: string;
  percentages: {
    bitter: number
    sweet: number
    sour: number
    spicy: number
    fruity: number
    smoky: number
  }
}

export function RecommendationView({
  image,
  category,
  title,
  price,
  percentages,
}: RecommendationViewProps) {
  const { classes } = useStyles();
  
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/margarita')}>
    <Card withBorder radius="md" p={0} className={classes.card} >
      <Group noWrap spacing={0} >
        <div className={classes.body}>
          <Grid gutter='xl'>
          <Grid.Col span="auto">
              <Image src={image} height={190} width={190} />
          </Grid.Col>
          <Grid.Col span="auto" >
                <div>
                  <Text c='dimmed' weight={300} size={30} className={classes.title}>
                    {title}
                  </Text>
                  <br />
                  <Text c='dimmed' lineClamp={2} mt={20} size='sm'>{price}</Text>
                  <Text c='dimmed' lineClamp={2} size='sm'>{category}</Text>
                  
                </div>
          </Grid.Col>
          <Grid.Col span="auto" >
                    <div>Bitterness:<br />{percentages.bitter}%</div>
                    <br />
                    <div>Sweetness:<br />{percentages.sweet}%</div>
          </Grid.Col>
          <Grid.Col span={"auto"}>
                    <div>Sourness:<br />{percentages.sour}%</div>
                  <br />
                    <div>Spice:<br />{percentages.spicy}%</div>
          </Grid.Col>
          <Grid.Col span="auto">
                    <div>Fruityness:<br />{percentages.fruity}%</div>
                    <br />
                    <div>Smokyness:<br />{percentages.smoky}%</div>
          </Grid.Col>
          </Grid>
        </div>
      </Group>
    </Card>
      </div>
    );
}

export default RecommendationView;