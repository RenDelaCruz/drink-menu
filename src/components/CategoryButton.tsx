import { Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    marginTop: 20,
    width: '100%',
    height: 75,
    border: '0.01px solid',
  },
}));

type CategoryButtonProps = {
  leftIcon?: any;
  children: string;
};

function CategoryButton({ leftIcon, children }: CategoryButtonProps) {
  const { classes } = useStyles();

  function handleScroll() {
    const id = children;
    const yOffset = -100;
    const element = document.getElementById(id);
    if (element !== null) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <Button
      className={classes.button}
      leftIcon={leftIcon}
      variant='light'
      radius='xl'
      size='lg'
      onClick={handleScroll}
    >
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </Button>
  );
}

export default CategoryButton;
