import { Button, Center, Group, Switch, Title } from '@mantine/core';
import { useState } from 'react';
import RecommendationList from '../components/RecommendationList';

function Recommendation() {
  const [state, setState] = useState({
    bitter: false,
    sweet: false,
  });

  function handleClick(flav: any) {
    switch (flav) {
      case 'Bitter':
        setState((prevState) => ({ ...prevState, bitter: !prevState.bitter }));
        break;
      case 'Sweet':
        setState((prevState) => ({ ...prevState, sweet: !prevState.sweet }));
        break;
    }
  }

  return (
    <div style={{ padding: 10 }}>
      <Group position='apart'>
        <Button>Back</Button>
      </Group>
      <Center>
        <Title order={1}>select your preffered drink flavours</Title>
      </Center>
      <br />
      <Center>
        <Switch.Group spacing='xl' size='xl'>
          <Switch value='Bitter' label='Bitter' onClick={() => handleClick('Bitter')} />
          <Switch value='Sweet' label='Sweet' onClick={() => handleClick('Sweet')} />
          <Switch value='Sour' label='Sour' />
          <Switch value='Spicy' label='Spicy' />
          <Switch value='Fruity' label='Fruity' />
          <Switch value='Smoky ' label='Smoky' />
        </Switch.Group>
      </Center>
      <br />
      <Center>
        <Title order={1}>Recommendations</Title>
      </Center>
      <br />
      <Center>
        <RecommendationList bitter={state.bitter} sweet={state.sweet} />
      </Center>
    </div>
  );
}

export default Recommendation;
