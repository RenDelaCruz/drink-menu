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
  children: any;
};

function CategoryButton({ leftIcon, children }: CategoryButtonProps) {
  const { classes } = useStyles();

  return (
    <Button className={classes.button} leftIcon={leftIcon} variant='light' radius='xl' size='lg'>
      {children}
    </Button>
  );
}

export default CategoryButton;
