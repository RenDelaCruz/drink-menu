import { Container, createStyles, MantineNumberSize, Navbar } from '@mantine/core';
import CategoryButton from './CategoryButton';

const useStyles = createStyles((theme) => ({
  noBorder: {
    border: 'none',
    background: 'none'
  },

  padded: {
    padding: '20px 50px',
    // border: '1px solid black'
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
        {categories.map((category) => (
          <CategoryButton leftIcon={category.icon}>{category.name}</CategoryButton>
        ))}
      </Container>
    </Navbar>
  );
}

export default CategoryNavigation;
