import { Button, Center, Container, Input, Text, Textarea, useMantineTheme } from '@mantine/core';
import { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewFormProps {
  handleAddReview: any;
}

function ReviewForm({ handleAddReview }: ReviewFormProps) {
  const theme = useMantineTheme();
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const comment = useRef<any>(null);
  const email = useRef<any>(null);

  const handleClick = (value: any) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue: any) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = () => {
    alert(`${email?.current?.value}, ${comment?.current?.value}, ${currentValue} stars`);
    if (handleAddReview) {
      handleAddReview();
    }
  };

  return (
    <>
      <Center>
        <Text>Enter rating out of 5 stars:</Text>
      </Center>
      <Center>
        <Container style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? theme.colors.yellow[4]
                    : theme.colors.gray[7]
                }
                style={{
                  marginRight: 10,
                  cursor: 'pointer',
                }}
              />
            );
          })}
        </Container>
      </Center>
      <Text sx={{ marginTop: 25 }}>Comments:</Text>
      <Textarea ref={comment} placeholder='Tell us your feedback' />
      <Text sx={{ marginTop: 25 }}>Email:</Text>
      <Input ref={email} type='text' placeholder='your@email.com'></Input>
      <Button onClick={handleSubmit} sx={{ marginTop: 25 }}>
        Submit
      </Button>
    </>
  );
}

const styles = {
  stars: {
    display: 'flex',
    flexdirection: 'row',
  },
};

export default ReviewForm;
