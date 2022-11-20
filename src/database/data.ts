import Bacardi from '../images/Bacardi.webp';
import BelgianMoon from '../images/BelgianMoon.jpeg';
import Bousquet from '../images/Bousquet.jpeg';
import Daiqiri from '../images/Daiqiri.jpeg';
import GreyGoose from '../images/GreyGoose.jpeg';
import Guinness from '../images/Guinness.jpeg';
import Heineken from '../images/Heineken.jpeg';
import JacobsCreek from '../images/JacobsCreek.jpeg';
import Jagermeister from '../images/Jagermeister.jpeg';
import Licor43 from '../images/Licor43.jpeg';
import Limoncello from '../images/Limoncello.jpeg';
import Margarita from '../images/Margarita.jpg';
import MolsonCanadian from '../images/MolsonCanadian.webp';
import MoscowMule from '../images/MoscowMule.webp';
import Negroni from '../images/Negroni.jpeg';
import OldFashioned from '../images/OldFashioned.jpeg';
import PinaColada from '../images/PinaColada.jpeg';
import Sandhill from '../images/Sandhill.jpeg';
import Soju from '../images/Soju.jpeg';
import Strongbow from '../images/Strongbow.jpeg';

type Category = 'cocktails' | 'beer' | 'wine' | 'spirits' | 'liqueurs';

type StarRating = 1 | 2 | 3 | 4 | 5;

export interface Drink {
  name: string;
  price: string;
  rating: StarRating;
  image: string;
  volume: string;
  category: Category;
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
        volume: '9 oz',
        category: 'cocktails',
      },
      {
        name: 'Negroni',
        price: '$10.70',
        rating: 4,
        image: Negroni,
        volume: '6 oz',
        category: 'cocktails',
      },
      {
        name: 'Daiquiri',
        price: '$12.05',
        rating: 5,
        image: Daiqiri,
        volume: '12 oz',
        category: 'cocktails',
      },
      {
        name: 'Old Fashioned',
        price: '$9.05',
        rating: 2,
        image: OldFashioned,
        volume: '8 oz',
        category: 'cocktails',
      },
      {
        name: 'Piña Colada',
        price: '$6.70',
        rating: 4,
        image: PinaColada,
        volume: '12 oz',
        category: 'cocktails',
      },
      {
        name: 'Moscow Mule',
        price: '$13.20',
        rating: 2,
        image: MoscowMule,
        volume: '8 oz',
        category: 'cocktails',
      },
    ],
  },
  {
    category: 'beer',
    drinks: [
      {
        name: 'Molson Canadian',
        price: '$6.10',
        rating: 4,
        image: MolsonCanadian,
        volume: '20 oz',
        category: 'beer',
      },
      {
        name: 'Guinness',
        price: '$7.35',
        rating: 5,
        image: Guinness,
        volume: '20 oz',
        category: 'beer',
      },
      {
        name: 'Heineken',
        price: '$5.90',
        rating: 4,
        image: Heineken,
        volume: '20 oz',
        category: 'beer',
      },
      {
        name: 'Belgian Moon',
        price: '$4.95',
        rating: 3,
        image: BelgianMoon,
        volume: '15 oz',
        category: 'beer',
      },
      {
        name: 'Strongbow',
        price: '$7.85',
        rating: 5,
        image: Strongbow,
        volume: '15 oz',
        category: 'beer',
      },
    ],
  },
  {
    category: 'wine',
    drinks: [
      {
        name: 'Bousquet',
        price: '$13.95',
        rating: 5,
        image: Bousquet,
        volume: '10 oz',
        category: 'wine',
      },
      {
        name: "Jacob's Creek",
        price: '$10.50',
        rating: 3,
        image: JacobsCreek,
        volume: '8 oz',
        category: 'wine',
      },
      {
        name: 'Sandhill',
        price: '$8.70',
        rating: 4,
        image: Sandhill,
        volume: '8 oz',
        category: 'wine',
      },
    ],
  },
  {
    category: 'spirits',
    drinks: [
      {
        name: 'Grey Goose',
        price: '$5.95',
        rating: 4,
        image: GreyGoose,
        volume: '1 oz',
        category: 'spirits',
      },
      {
        name: 'Bacardi',
        price: '$7.00',
        rating: 2,
        image: Bacardi,
        volume: '2 oz',
        category: 'spirits',
      },
      {
        name: 'Chum Churum Soju',
        price: '$4.60',
        rating: 3,
        image: Soju,
        volume: '2 oz',
        category: 'spirits',
      },
    ],
  },
  {
    category: 'liqueurs',
    drinks: [
      {
        name: 'Jägermeister',
        price: '$4.05',
        rating: 4,
        image: Jagermeister,
        volume: '1 oz',
        category: 'liqueurs',
      },
      {
        name: 'Licor 43',
        price: '$7.05',
        rating: 3,
        image: Licor43,
        volume: '1 oz',
        category: 'liqueurs',
      },
      {
        name: 'Russo Limoncello',
        price: '$3.95',
        rating: 5,
        image: Limoncello,
        volume: '1 oz',
        category: 'liqueurs',
      },
    ],
  },
];

export const allDrinks = info.map(({ category, drinks }) => drinks).flat(1);

export default info;
