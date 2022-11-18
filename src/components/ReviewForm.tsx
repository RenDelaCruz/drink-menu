import {
  Button,
  Center,
  Container,
  Text,
  Textarea,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
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
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isMissingAtSign, setIsMissingAtSign] = useState(false);

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
    const emailValue: any = email?.current?.value || null;
    const commentValue: any = comment?.current?.value || null;
    const selectedRating = currentValue;

    if (!commentValue && (!emailValue || !emailValue.includes('@'))) {
      setIsCommentEmpty(true);

      if (!emailValue) {
        setIsEmailEmpty(true);
        setIsMissingAtSign(false);
      } else {
        setIsMissingAtSign(true);
        setIsEmailEmpty(false);
      }
      return;
    } else {
      setIsCommentEmpty(false);
      setIsEmailEmpty(false);
      setIsMissingAtSign(false);
    }

    if (!commentValue) {
      setIsCommentEmpty(true);
      return;
    } else {
      setIsCommentEmpty(false);
    }

    if (!emailValue) {
      setIsEmailEmpty(true);
      return;
    } else {
      setIsEmailEmpty(false);
    }

    if (!emailValue.includes('@')) {
      setIsMissingAtSign(true);
      return;
    } else {
      setIsMissingAtSign(false);
    }

    if (handleAddReview) {
      handleAddReview({
        email: emailValue,
        comment: commentValue,
        selectedRating: selectedRating,
      });
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
      <Textarea
        ref={comment}
        placeholder='Tell us your feedback'
        error={isCommentEmpty ? 'Review cannot be empty' : false}
      />
      <Text sx={{ marginTop: 25 }}>Email:</Text>
      <TextInput
        ref={email}
        type='text'
        placeholder='your@email.com'
        error={
          isEmailEmpty
            ? 'Email cannot be empty'
            : isMissingAtSign
            ? 'Enter a valid email address'
            : false
        }
      ></TextInput>
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
