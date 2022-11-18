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

interface Drink {
  name: string;
  price: string;
  rating: StarRating;
  image: string;
  volume: string;
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
        volume: '1 oz',
      },
      {
        name: 'Negroni',
        price: '$10.70',
        rating: 4,
        image: Negroni,
        volume: '1 oz',
      },
      {
        name: 'Daiquiri',
        price: '$12.05',
        rating: 4,
        image: Daiqiri,
        volume: '1 oz',
      },
      {
        name: 'Old Fashioned',
        price: '$7.05',
        rating: 3,
        image: OldFashioned,
        volume: '1 oz',
      },
      {
        name: 'Piña Colada',
        price: '$7.05',
        rating: 4,
        image: PinaColada,
        volume: '1 oz',
      },
      {
        name: 'Moscow Mule',
        price: '$7.05',
        rating: 4,
        image: MoscowMule,
        volume: '1 oz',
      },
    ],
  },
  {
    category: 'beer',
    drinks: [
      {
        name: 'Molson Canadian',
        price: '$7.05',
        rating: 4,
        image: MolsonCanadian,
        volume: '1 oz',
      },
      {
        name: 'Guinness',
        price: '$7.05',
        rating: 4,
        image: Guinness,
        volume: '1 oz',
      },
      {
        name: 'Heineken',
        price: '$7.05',
        rating: 4,
        image: Heineken,
        volume: '1 oz',
      },
      {
        name: 'Belgian Moon',
        price: '$7.05',
        rating: 4,
        image: BelgianMoon,
        volume: '1 oz',
      },
      {
        name: 'Strongbow',
        price: '$7.05',
        rating: 4,
        image: Strongbow,
        volume: '1 oz',
      },
    ],
  },
  {
    category: 'wine',
    drinks: [
      {
        name: 'Bousquet',
        price: '$7.05',
        rating: 4,
        image: Bousquet,
        volume: '1 oz',
      },
      {
        name: "Jacob's Creek",
        price: '$7.05',
        rating: 4,
        image: JacobsCreek,
        volume: '1 oz',
      },
      {
        name: 'Sandhill',
        price: '$7.05',
        rating: 4,
        image: Sandhill,
        volume: '1 oz',
      },
    ],
  },
  {
    category: 'spirits',
    drinks: [
      {
        name: 'Grey Goose',
        price: '$7.05',
        rating: 4,
        image: GreyGoose,
        volume: '1 oz',
      },
      {
        name: 'Bacardi',
        price: '$7.05',
        rating: 4,
        image: Bacardi,
        volume: '1 oz',
      },
      {
        name: 'Chum Churum Soju',
        price: '$7.05',
        rating: 4,
        image: Soju,
        volume: '1 oz',
      },
    ],
  },
  {
    category: 'liqueurs',
    drinks: [
      {
        name: 'Jägermeister',
        price: '$7.05',
        rating: 4,
        image: Jagermeister,
        volume: '1 oz',
      },
      {
        name: 'Licor 43',
        price: '$7.05',
        rating: 4,
        image: Licor43,
        volume: '1 oz',
      },
      {
        name: 'Russo Limoncello',
        price: '$7.05',
        rating: 4,
        image: Limoncello,
        volume: '1 oz',
      },
    ],
  },
];

export default info;
