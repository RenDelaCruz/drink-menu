import React, { Component } from 'react'
import { Image, Center, Group, Button, Title, Space } from '@mantine/core';
import { Switch } from '@mantine/core';
import RecommendationList from '../components/RecommendationList';


class Recommendation extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      bitter: false,
      sweet: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(flav : any){
    switch(flav) {
      case "Bitter":
        this.setState(prevState => ({ bitter: !prevState.bitter }));
        break;
      case "Sweet":
        this.setState(prevState => ({ sweet: !prevState.sweet }));
        break;
    }
  }

  render(){
    return (
      <div style={{padding:10}}>
        <Group position='apart'>
          <Button>
            Back
          </Button>
        </Group>
        <Center>
          <Title order={1}>select your preffered drink flavours</Title>
        </Center>
        <br />
        <Center>
        <Switch.Group 
            spacing="xl"
            size="xl"
        >
            <Switch value="Bitter" label="Bitter" onClick={() => this.handleClick("Bitter")} />
            <Switch value="Sweet" label="Sweet" onClick={() => this.handleClick("Sweet")}/>
            <Switch value="Sour" label="Sour" />
            <Switch value="Spicy" label="Spicy" />
            <Switch value="Fruity" label="Fruity" />
            <Switch value="Smoky " label="Smoky" />
        </Switch.Group>
        </Center>
        <br />
        <Center>
          <Title order={1}>Recommendations</Title>
        </Center>
        <br />
        <Center>
            <RecommendationList
            bitter={this.state.bitter}
            sweet={this.state.sweet}
            />
        </Center>
        </div>
  );

}
}

export default Recommendation;
