import { Center, Container, Flex, Group, Paper, Switch, Text } from '@mantine/core';
import { useState } from 'react';
import DrinkHeader from '../components/DrinkHeader';
import RecommendationList from '../components/RecommendationList';

function Recommendation() {
  const [state, setState] = useState({
    bitter: false,
    sweet: false,
    sour: false,
    spicy: false,
    fruity: false,
    smoky: false,
  });

  function handleClick(flav: any) {
    switch (flav) {
      case 'Bitter':
        setState((prevState) => ({ ...prevState, bitter: !prevState.bitter }));
        break;
      case 'Sweet':
        setState((prevState) => ({ ...prevState, sweet: !prevState.sweet }));
        break;
      case 'Sour':
        setState((prevState) => ({ ...prevState, sour: !prevState.sour }));
        break;
      case 'Spicy':
        setState((prevState) => ({ ...prevState, spicy: !prevState.spicy }));
        break;
      case 'Fruity':
        setState((prevState) => ({ ...prevState, fruity: !prevState.fruity }));
        break;
      case 'Smoky':
        setState((prevState) => ({ ...prevState, smoky: !prevState.smoky }));
        break;
    }
  }

  return (
    <>
      <DrinkHeader />
      <div style={{ padding: 10, marginTop: 120, marginBottom: 60 }}>
        <Container>
          <Text fz={80} fw={700} tt='capitalize'>
            Recommendations
          </Text>
          <Paper
            withBorder
            p='xl'
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
            })}
          >
            <Center>
              <Text size={30}>Select your preferred drink flavours</Text>
            </Center>
            <Center>
              <Group spacing='lg'>
                <Switch.Group spacing='xl' size='xl'>
                  <Flex gap='md' justify='flex-start' align='flex-start' direction='column'>
                    <Switch value='Bitter' label='Bitter' onClick={() => handleClick('Bitter')} />
                    <Switch value='Sweet' label='Sweet' onClick={() => handleClick('Sweet')} />
                  </Flex>
                </Switch.Group>
                <Switch.Group spacing='xl' size='xl'>
                  <Flex gap='md' justify='flex-start' align='flex-start' direction='column'>
                    <Switch value='Sour' label='Sour' onClick={() => handleClick('Sour')} />
                    <Switch value='Spicy' label='Spicy' onClick={() => handleClick('Spicy')} />
                  </Flex>
                </Switch.Group>
                <Switch.Group spacing='xl' size='xl'>
                  <Flex gap='md' justify='flex-start' align='flex-start' direction='column'>
                    <Switch value='Fruity' label='Fruity' onClick={() => handleClick('Fruity')} />
                    <Switch value='Smoky ' label='Smoky' onClick={() => handleClick('Smoky')} />
                  </Flex>
                </Switch.Group>
              </Group>
            </Center>
          </Paper>
          <br />
          <br />
          <Center>
            <RecommendationList
              bitter={state.bitter}
              sweet={state.sweet}
              sour={state.sour}
              spicy={state.spicy}
              fruity={state.fruity}
              smoky={state.smoky}
            />
          </Center>
        </Container>
      </div>
    </>
  );
}

export default Recommendation;
