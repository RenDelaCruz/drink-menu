import Daiqiri from '../images/Daiqiri.jpeg';
import Margarita from '../images/Margarita.jpg';

type Category = 'cocktails' | 'beer' | 'wine' | 'spirits' | 'liqueurs';

type StarRating = 1 | 2 | 3 | 4 | 5;

interface Drink {
  name: string;
  price: string;
  rating: StarRating;
  image: string;
}

interface DrinkSection {
  category: Category;
  drinks: Array<Drink>;
}

const defaultImage =
  'https://www.liquor.com/thmb/Lj4-pg4Gn-4t4qJfm4BTYVNMVMY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__04__23143458__daiquiri-720x720-recipe-09f1d5665a794eddbbfb997876736136.jpg';

const info: Array<DrinkSection> = [
  {
    category: 'cocktails',
    drinks: [
      {
        name: 'Margarita',
        price: '$7.10',
        rating: 5,
        image: Margarita,
      },
      {
        name: 'Daiquiri',
        price: '$9.05',
        rating: 4,
        image: Daiqiri,
      },
    ],
  },
  {
    category: 'beer',
    drinks: [],
  },
  {
    category: 'wine',
    drinks: [],
  },
  {
    category: 'spirits',
    drinks: [],
  },
  {
    category: 'liqueurs',
    drinks: [],
  },
];

export default info;
