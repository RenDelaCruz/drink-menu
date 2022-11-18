import {
  Button,
  Container,
  createStyles,
  Group,
  Input,
  MantineNumberSize,
  Navbar,
} from '@mantine/core';
import { AdjustmentsHorizontal, Download, Search } from 'tabler-icons-react';
import CategoryButton from './CategoryButton';

const useStyles = createStyles((theme) => ({
  noBorder: {
    border: 'none',
    [theme.fn.largerThan('sm')]: { background: 'none' },
  },

  padded: {
    padding: '20px 50px',
  },
}));

type CategoryNavigationProps = {
  padding: MantineNumberSize;
  hiddenBreakpoint: MantineNumberSize;
  hidden: boolean;
  width: {
    sm: number;
    lg: number;
  };
};

const categories = [
  {
    name: 'Cocktails',
    icon: <i className='fa-solid fa-martini-glass-citrus'></i>,
  },
  {
    name: 'Beer',
    icon: <i className='fa-solid fa-beer-mug-empty'></i>,
  },
  {
    name: 'Wine',
    icon: <i className='fa-solid fa-wine-bottle'></i>,
  },
  {
    name: 'Spirits',
    icon: <i className='fa-solid fa-whiskey-glass'></i>,
  },
  {
    name: 'Liqueurs',
    icon: <i className='fa-solid fa-bottle-droplet'></i>,
  },
];

function CategoryNavigation({ ...navbarProps }: CategoryNavigationProps) {
  const { classes } = useStyles();

  return (
    <Navbar className={classes.noBorder} {...navbarProps}>
      <Container className={classes.padded}>
        <Container sx={{ margin: '15px 0 20px 0', padding: 0 }}>
          <Input icon={<Search />} placeholder='Search' />
          <Group grow sx={{ marginTop: 20 }} >
            <Button leftIcon={<AdjustmentsHorizontal />}>Filter</Button>
            <Button leftIcon={<Download />}>Download</Button>
          </Group>
        </Container>
        {categories.map((category) => (
          <CategoryButton leftIcon={category.icon}>{category.name}</CategoryButton>
        ))}
      </Container>
    </Navbar>
  );
}

export default CategoryNavigation;
