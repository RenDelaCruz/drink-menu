import { createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({}));

type CategoryTitleProps = {
  children: string;
};

function CategoryTitle({ children }: CategoryTitleProps) {
  const { classes } = useStyles();

  return (
    <Text
      // variant='gradient'
      // gradient={{ from: 'cyan', to: 'teal', deg: 180 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      fz={80}
      fw={700}
      mt={20}
      tt='capitalize'
    >
      {children}
    </Text>
  );
}

export default CategoryTitle;
