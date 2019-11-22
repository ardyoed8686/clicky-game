import React, {Component} from 'react';
import FriendCard from './components/FriendCard';
import marvelFriends from './marvelFriends'
import Header from './components/Header'
import Navbar from './components/Navbar/index';
// import './App.css';

class App extends Component {
  state =  {
    marvelFriends,
    guess: false,
    playerScore: 0,
    topScore: 0
  }
  
  handleClick = id => {
    console.log("I am here", id);
    // this.state.marvelFriends.id === id then clicked: true 
    // then shuffle array
    // then update state using .setState with new array
  }

  handleIncrement = () => {
    this.setState({ playerScore: this.state.playerScore + 1 });
    this.setState({ topScore: this.state.topScore + 1 });
  };


  render() {
    const marvelList = this.state.marvelFriends.map((marvelFriend) =>
    <FriendCard 
    handleClick={this.handleClick}
    key={marvelFriend.id}
    image={marvelFriend.image}
    id={marvelFriend.id}
    /> 
    );
  return (
    <div>
      <Navbar guess={this.state.guess ? "You guessed correctly" : "You did not guess correctly"}
      playerScore={this.state.playerScore} topScore={this.state.topScoret} handleIncrement={this.handleIncrement}/>
      <div>
      <Header />
      </div>
      <div className="container">
        <hr />
      {marvelList}
      </div>
    </div>
 
  );
}
}

export default App;
