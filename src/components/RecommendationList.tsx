import { Stack } from '@mantine/core';
import info from '../database/data';
import pcts from '../database/percentages';
import RecommendationView from './DrinkRecommendationView';

export function RecommendationList(props: any) {
  function compare(a: any, b: any) {
    var bi = props.bitter ? 1 : 0;
    var sw = props.sweet ? 1 : 0;
    var so = props.sour ? 1 : 0;
    var sp = props.spicy ? 1 : 0;
    var fr = props.fruity ? 1 : 0;
    var sm = props.smoky ? 1 : 0;

    var count_a =
      bi * a.percent.bitter +
      sw * a.percent.sweet +
      so * a.percent.sour +
      sp * a.percent.spicy +
      fr * a.percent.fruity +
      sm * a.percent.smoky;
    var count_b =
      bi * b.percent.bitter +
      sw * b.percent.sweet +
      so * b.percent.sour +
      sp * b.percent.spicy +
      fr * b.percent.fruity +
      sm * b.percent.smoky;

    return count_b - count_a;
  }

  return (
    <div>
      <div>
        <div>
          {pcts.sort(compare).map(({ pname, percent }) => (
            <>
              {info.map(({ category, drinks }) => (
                <Stack>
                  {drinks.map((drink) => (
                    <>
                      {drink.name === pname.name ? (
                        <RecommendationView
                          key={drink.name}
                          image={drink.image}
                          category={category}
                          title={drink.name}
                          price={drink.price}
                          percentages={percent}
                        />
                      ) : (
                        ''
                      )}
                    </>
                  ))}
                </Stack>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendationList;
