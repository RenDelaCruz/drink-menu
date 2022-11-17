import { Container, Title, Button, Space, Image, Text, Stack } from '@mantine/core';
import Stars from '../images/Stars.jpg';
import { useNavigate } from 'react-router-dom';

function DrinkInfo () {
    const navigate = useNavigate()
    return (
        <Container size={400} px={10}
            sx={{ backgroundColor: '#ced4da', borderRadius: 4, borderColor:'#000000', borderStyle: 'solid'}}
        >
            <Stack justify="space-between">
            <Title>
                Reviews
            </Title>
            <Space h="sm" />
            <Image
                src={Stars}
                width={200}
                height={50} 
            />
            <Text>
                Refreshing and love the citrus flavour.
            </Text>
            <Space h="sm" />
            <Image
                src={Stars}
                width={200}
                height={50} 
            />
            <Text>
                Perfect balance of sweet, sour and spicy.
            </Text>
            <Space h="xl" />
            <Button onClick={() => navigate('/margarita/review')}>
                Leave a Review
            </Button>
            <Space h="xl" />
            </Stack>
        </Container>
    );
}

export default DrinkInfo;
