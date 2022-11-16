import { Textarea, Input, Container, Text, Button, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewForm() {
    const theme = useMantineTheme();
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };

    return (
        <>
        <Text>Enter rating out of 5 stars:</Text>
        <Container>
            {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || currentValue) > index ? theme.colors.yellow : theme.colors.gray}
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

export default ReviewForm;