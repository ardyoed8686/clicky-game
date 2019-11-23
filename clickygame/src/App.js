import React, {Component} from 'react';
import MarvelCard from './components/MarvelCard';
// .json file with card images
import marvelFriends from './marvelFriends.json'
import Header from './components/Header'
import Navbar from './components/Navbar/index';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state =  {
      marvelFriends,
      clickedIds: [],
      playerScore: 0,
      maxScore: 12,
      topScore: 0,
      clicked: ""
    }

  }

   shuffleCards = id => {

    let clickedIds = this.state.clickedIds;
    if(clickedIds.includes(id)){
      this.setState({ clickedIds: [], playerScore: 0, guessMessage:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedIds.push(id)

      if(clickedIds.length === 12){
        this.setState({playerScore: 12, guessMessage: "You Won! Great Job! Click to play again!", clickedIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ marvelFriends, clickedIds, playerScore: clickedIds.length, guessMessage: " "});

      for (let i = marvelFriends.length — 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [marvelFriends[i], marvelFriends[j]] = [marvelFriends[j], marvelFriends[i]];

        
  } 
} 
}

  
  handleClick = id => {
    console.log("I am here", id);
    const marvelFriends = this.state.marvelFriends;

    // filter for the clicked images
    const matchClicked = marvelFriends.filter(marvelFriend => marvelFriend.id === id);
    if (matchClicked[0].clicked) {
      console.log ("Correct Guesses: " + playerScore);
      console.log ("Best Score: " + topScore);

      playerScore = 0;
      guessMessage = "You guessed incorrectly! Already clicked!"

      for (let i = 0; i < marvelFriends.length; i++) {
        marvelFriends[i].clicked = false;
      }
        this.setState({guessMessage});
        this.setState({ playerScore });
        this.setState({marvelFriends});
    } else if (playerScore < 12) {
      matchClicked[0].clicked = true;

      playerScore++;

      guessMessage = "You guessed correctly!";

      if (playerScore > topScore) {
        topScore = playerScore;
        this.setState({ topScore });
      }
    }
    }

    // if (this.state.marvelFriends.id === id) {
    //   this.setState({playerGuess: true})
      
    // }
    // then shuffle array
    // then update state using .setState with new array`
  
  };

  handleIncrement = () => {
    this.setState({ playerScore: this.state.playerScore + 1 });
    this.setState({ topScore: this.state.topScore + 1 });
  };


  render() {
    const marvelList = this.state.marvelFriends.map((marvelFriend) =>
    <MarvelCard 
    handleClick={this.handleClick}
    key={marvelFriend.id}
    image={marvelFriend.image}
    id={marvelFriend.id}
    /> 
    )
  return (
    <div>
      <Navbar playerGuess={this.state.playerGuess ? "You guessed correctly" : "You did not guess correctly"}
      playerScore={this.state.playerScore} topScore={this.state.topScore} handleIncrement={this.handleIncrement}/>
      <div>
      <Header />
      </div>
      <div className="container">
        <hr />
      {marvelList}
      </div>
      <footer>
        <p>Clicky Game - Built by Romy Owens </p>
      </footer>
    </div>
 
  );
}


export default App;
