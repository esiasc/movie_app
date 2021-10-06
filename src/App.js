
function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}
// name, picture 두 prop을 전달 받아온다.

const foodILike = [
  {
    name: "Taco",
    image:
      "https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg"
  },
  {
    name: "Pizza",
    image:
      "https://barpizzaque.com/wp-content/uploads/2021/05/Cheese-Pizza-1024x768.gif"
  },
  {
    name: "Salad",
    image:
      "https://www.twopeasandtheirpod.com/wp-content/uploads/2019/06/Easy-Green-Salad-4.jpg"
  },
  {
    name: "Hot Pot",
    image:
      "https://www.chatelaine.com/wp-content/uploads/2021/02/CHE02_WEB_FD_HOTPOT_ArticleFeature.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
//dish는 object이다. dish의 첫번째 object는 Taco, 두번째 Pizza... 그래서 dish.name하면 foodILike에서 name들을 불러오고 dish.image하면 foodILike에서 image 항목을 불러온다.

export default App;

