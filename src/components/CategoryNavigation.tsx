import { MantineNumberSize, Navbar, Text } from '@mantine/core';

type CategoryNavigationProps = {
  padding: MantineNumberSize;
  hiddenBreakpoint: MantineNumberSize;
  hidden: boolean;
  width: {
    sm: number;
    lg: number;
  };
};

function CategoryNavigation({ ...navbarProps }: CategoryNavigationProps) {
  return (
    <Navbar {...navbarProps}>
      <Text>TODO: Drink categories</Text>
    </Navbar>
  );
}

export default CategoryNavigation;
