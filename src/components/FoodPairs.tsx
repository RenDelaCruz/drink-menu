import { Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import Enchiladas from '../images/Enchiladas.jpg';
import JerkChicken from '../images/JerkChicken.jpg';
import ShrimpCakes from '../images/ShrimpCakes.jpg';


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
