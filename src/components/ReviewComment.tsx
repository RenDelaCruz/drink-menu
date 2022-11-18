import { Avatar, createStyles, Group, Paper, Text } from '@mantine/core';
import StarRating from './StartRating';

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    width: '100%',
    marginTop: theme.spacing.xs,
  },
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

interface ReviewCommentProps {
  email: string;
  children: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

function ReviewComment({ email, children, rating }: ReviewCommentProps) {
  const { classes } = useStyles();
  return (
    <Paper withBorder p={20} radius='md' className={classes.comment}>
      <Group>
        <Avatar color='teal' alt={email} radius='xl'></Avatar>
        <Text size='sm'>{email}</Text>
      </Group>
      <div className={classes.body}>
        <StarRating rating={rating} size={18} />
      </div>
      <Text className={classes.body} size='sm'>
        {children}
      </Text>
    </Paper>
  );
}

export default ReviewComment;
