import { createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    marginTop: 20,
    width: '100%',
    height: 75,
  },
}));

type CategoryTitleProps = {
  children: string;
};

function CategoryTitle({ children }: CategoryTitleProps) {
  const { classes } = useStyles();

  return (
    <Text
      variant='gradient'
      gradient={{ from: 'cyan', to: 'teal', deg: 180 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      fz={80}
      fw={700}
      mt={20}
    >
      {children}
    </Text>
  );
}

export default CategoryTitle;
