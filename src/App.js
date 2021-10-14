import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // 미래에 사용하고자 하는 state를 선언하는건 필수가 아니다. 미래를 위해 계획하는 것 뿐이다. 나중에 state를 추가해도 된다. (처음에 선언해두는 것이 좋은 습관이긴 함)
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  };
  
  componentDidMount(){
    this.getMovies();
  }
  
  render(){
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
      );
  }
}
// es6

export default App;