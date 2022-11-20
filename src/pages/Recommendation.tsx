import { Center,  Switch } from '@mantine/core';
import { useState } from 'react';
import RecommendationList from '../components/RecommendationList';
import CategoryTitle from '../components/CategoryTitle';
import DrinkHeader from '../components/DrinkHeader';


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
    <div style={{ padding: 100 }}>
    <DrinkHeader  />
      <Center>
        <CategoryTitle>select your preffered drink flavours</CategoryTitle>
      </Center>
      <br />
      <Center>
        <Switch.Group spacing='xl' size='xl'>
          <Switch value='Bitter' label='Bitter' onClick={() => handleClick('Bitter')} />
          <Switch value='Sweet' label='Sweet' onClick={() => handleClick('Sweet')} />
          <Switch value='Sour' label='Sour' onClick={() => handleClick('Sour')}/>
          <Switch value='Spicy' label='Spicy' onClick={() => handleClick('Spicy')}/>
          <Switch value='Fruity' label='Fruity' onClick={() => handleClick('Fruity')}/>
          <Switch value='Smoky ' label='Smoky' onClick={() => handleClick('Smoky')}/>
        </Switch.Group>
      </Center>
      <br />
      <Center>
        <CategoryTitle>Recommendations</CategoryTitle>
      </Center>
      <br />
      <Center>
        <RecommendationList bitter={state.bitter} sweet={state.sweet} sour={state.sour} spicy={state.spicy} fruity={state.fruity} smoky={state.smoky} />
      </Center>
      
    </div>
  );
}

export default Recommendation;
