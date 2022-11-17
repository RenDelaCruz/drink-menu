type Category = 'cocktails' | 'beer' | 'wine' | 'spirits' | 'liqueurs';

type StarRating = 1 | 2 | 3 | 4 | 5;

interface Drink {
  name: string;
  price: string;
  category: Category;
  rating: StarRating;
}

const info: Array<Drink> = [
  {
    name: 'Daiquiri',
    price: '$9.05',
    category: 'cocktails',
    rating: 4,
  },
];

export default info;
