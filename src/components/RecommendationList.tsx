export function RecommendationList(props : any) {
  var lst1 = [1,2,3,4,5]
  var lst2 = [2,4,5,3,1]


  return (
    <div>
      <div>
        <p>{props.bitter ? '1' : '0'}
          {props.sweet ? '1' : '0'}</p>
      </div>
      <div>
        {props.bitter ? lst1.toString() : lst2.toString()}
      </div>
    </div>
  );
}

export default RecommendationList;
