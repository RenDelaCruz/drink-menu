import { Group, Container, Title, Button, Space, Image, Text, Stack } from '@mantine/core';
import JerkChicken from '../Images/JerkChicken.jpg';
import ShrimpCakes from '../Images/ShrimpCakes.jpg';
import Enchiladas from '../Images/Enchiladas.jpg';


function FoodPairs() {
    return (
        <Group position='center'>
            <Container size="xs" px="xs" >
                <Group>
                    <Image
                        src={JerkChicken}
                        fit="contain"
                        width={100}
                        height={100}
                    />
                    <Stack>
                        <Title order={4}>Jerk Chicken Sticks</Title>
                        <Text>$8.00</Text>
                    </Stack>
                </Group>
            </Container>

            <Container size="xs" px="xs" >
                <Group>
                    <Image
                        src={ShrimpCakes}
                        fit="contain"
                        width={100}
                        height={100}
                    />
                    <Stack>
                        <Title order={4}>Key West Shrimp Cakes</Title>
                        <Text>$5.00</Text>
                    </Stack>
                </Group> 
            </Container>

            <Container size="xs" px="xs" >
                <Group>
                    <Image
                        src={Enchiladas}
                        fit="contain"
                        width={100}
                        height={100}
                    />
                    <Stack>
                        <Title order={4}>Enchiladas</Title>
                        <Text>$6.00</Text>
                    </Stack>
                </Group>
            </Container>

        </Group>
    );
}

export default FoodPairs;