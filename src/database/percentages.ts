

interface Percentages {
  pname: {
    name:string;
  },
  percent:{
    bitter: number;
    sweet: number;
    sour: number;
    spicy: number;
    fruity: number;
    smoky: number;
  }
}

const pcts: Array<Percentages> = [
  {
    pname: {
        name: 'Margarita',
    },
    percent:{
      bitter: 1,
      sweet: 50,
      sour: 3,
      spicy: 27,
      fruity: 14,
      smoky: 5,
    }
  },
  {
    pname: {
        name: 'Negroni',
    },
    percent:{
      bitter: 66,
      sweet: 1,
      sour: 8,
      spicy: 14,
      fruity: 5,
      smoky: 6,
    }
  },
  {
    pname: {
        name: 'Daiquiri',
    },
    percent:{
      bitter: 26,
      sweet: 46,
      sour: 15,
      spicy: 8,
      fruity: 1,
      smoky: 4,
    }
  },
  {
    pname: {
        name: 'Bousquet',
    },
    percent:{
      bitter: 2,
      sweet: 12,
      sour: 3,
      spicy: 30,
      fruity: 39,
      smoky: 14,
    }
  },
  {
    pname: {
        name: 'Sandhill',
    },
    percent:{
      bitter: 17,
      sweet: 22,
      sour: 18,
      spicy: 31,
      fruity: 5,
      smoky: 7,
    }
  },
  {
    pname: {
        name: 'Jägermeister',
    },
    percent:{
      bitter: 7,
      sweet: 1,
      sour: 62,
      spicy: 6,
      fruity: 5,
      smoky: 19,
    }
  },
  {
    pname: {
        name: 'Belgian Moon',
    },
    percent:{
      bitter: 33,
      sweet: 5,
      sour: 18,
      spicy: 6,
      fruity: 28,
      smoky: 10,
    }
  },
  {
    pname: {
        name: 'Heineken',
    },
    percent:{
      bitter: 62,
      sweet: 6,
      sour: 18,
      spicy: 6,
      fruity: 3,
      smoky: 6,
    }
  },
];
export const allPcts = pcts.map(({ pname, percent }) => percent).flat(1);

export default pcts;
