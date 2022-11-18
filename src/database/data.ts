import Daiqiri from '../images/Daiqiri.jpeg';
import Margarita from '../images/Margarita.jpg';
import Negroni from '../images/Negroni.jpeg';
import PinaColada from '../images/PinaColada.jpeg';

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

const info: Array<DrinkSection> = [
  {
    category: 'cocktails',
    drinks: [
      {
        name: 'Margarita',
        price: '$9.10',
        rating: 5,
        image: Margarita,
      },
      {
        name: 'Negroni',
        price: '$10.70',
        rating: 4,
        image: Negroni,
      },
      {
        name: 'Daiquiri',
        price: '$12.05',
        rating: 4,
        image: Daiqiri,
      },
      {
        name: 'Piña Colada',
        price: '$7.05',
        rating: 4,
        image: PinaColada,
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
