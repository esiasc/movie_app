import React from "react";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // 미래에 사용하고자 하는 state를 선언하는건 필수가 아니다. 미래를 위해 계획하는 것 뿐이다. 나중에 state를 추가해도 된다. (처음에 선언해두는 것이 좋은 습관이긴 함)
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
  // 6초 후에 isLoading이 false로 바뀐다.
  // componentDidMount에서 data를 fetch한다
  
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