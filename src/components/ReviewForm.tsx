import { Textarea, Input, Container, Text, Button, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FileX } from 'tabler-icons-react';

function ReviewForm() {
    const theme = useMantineTheme();
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = (value: any) => {
        setCurrentValue(value)
    };

    const handleMouseOver = (newHoverValue: any) => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };

    return (
        <>
        <Text>Enter rating out of 5 stars:</Text>
        <Container style={styles.stars}>
            {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || currentValue) > index ? theme.colors.yellow[0] : theme.colors.gray[0]}
                        style={{
                        marginRight: 10,
                        cursor: "pointer"
                        }}
                    />
                )
            })}
        </Container>
        <Text>Comments:</Text>
        <Textarea
            placeholder='Tell us your feedback'
        />
        <Text>Email:</Text>
        <Input type='text'></Input>
        <Button>Submit</Button>
        </>
    );
}

const styles = {
    stars: {
        display: "flex",
        flexdirection: "row"
    }
}

export default ReviewForm;