import { Category } from "tabler-icons-react";
import { Stack, Button } from '@mantine/core';
import RecommendationView from "./DrinkRecommendationView";

export function RecommendationList(props : any) {
  var lst1 = [1,2,3,4,5]
  var lst2 = [2,4,5,3,1]


  const obj = {name: "mr", avatar: "C:\Users\dbedn\test\drink-menu\src\images\Enchiladas.jpg"}
  return (
    <div>
      <div>
        <p>{props.bitter ? '1' : '0'}
          {props.sweet ? '1' : '0'}</p>
      </div>
      <div>
        {props.bitter ? lst1.toString() : lst2.toString()}
        <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
          <RecommendationView image={"C:\Users\dbedn\test\drink-menu\src\images\Enchiladas.jpg"} category="red" title="red" date="5" author={obj}  />
          <RecommendationView image={"C:\Users\dbedn\test\drink-menu\src\images\Enchiladas.jpg"} category="red" title="red" date="5" author={obj}  />
          <RecommendationView image={"C:\Users\dbedn\test\drink-menu\src\images\Enchiladas.jpg"} category="red" title="red" date="5" author={obj}  />
        </Stack>
      </div>
    </div>
  );
}

export default RecommendationList;
