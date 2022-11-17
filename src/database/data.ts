import Margarita from '../images/Margarita.jpg';

type Category = 'cocktails' | 'beer' | 'wine' | 'spirits' | 'liqueurs';

type StarRating = 1 | 2 | 3 | 4 | 5;

interface Drink {
  name: string;
  price: string;
  category: Category;
  rating: StarRating;
  image: string | undefined | null;
}

const info: Array<Drink> = [
  {
    name: 'Margarita',
    price: '$7.10',
    category: 'cocktails',
    rating: 5,
    image: Margarita,
  },
  {
    name: 'Daiquiri',
    price: '$9.05',
    category: 'cocktails',
    rating: 4,
    image: null,
  },
];

export default info;
