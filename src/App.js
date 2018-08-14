import React, { Component } from 'react';
import KittyCard from "./components/KittyCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import kitties from "./kitties.json";
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    kitties: kitties,
    clicked: [],
    score: 0,
    highScore: 0
  }

  componentDidMount = () => {
    this.kittyShuffle();
  }

  kittyShuffle = () => {
    const shuffledKittiesList = this.state.kitties;
    for (let i = shuffledKittiesList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledKittiesList[i], shuffledKittiesList[j]] = [shuffledKittiesList[j], shuffledKittiesList[i]];
    }
    this.setState({ kitties: shuffledKittiesList });
  };

  clickKitty = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.success();
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.kittyShuffle();
    } else {
      this.FAILURE();
    }
  };

  // FAILED CODE, WASTED HOURS, DARK DESPAIR
  // clickKitty = (kittyId) => {

  //   console.log(this.state.kitties)
  //   console.log(this.state.clicked)
  //   let newClickedArray = this.state.clicked;
  //   this.state.kitties.map(kitty => {
  //     if (kitty.id === kittyId) {
  //       console.log("just clicked: ", kitty.id)
  //       newClickedArray.map(clickedArrayId => {
  //         if (clickedArrayId === kitty.id) {
  //           console.log("matched at: ", clickedArrayId, kitty.id)
  //           return this.FAILURE();
  //         }
  //         return (console.log('not a match'));
  //       })
  //       newClickedArray.push(kitty.id);
  //       return this.setState({ clicked: newClickedArray });
  //     }
  //     else {
  //       return (console.log('Cheese is good.'))
  //     }
  //   });
  //   return this.kittyShuffle();
  // }

  success = () => {
    const newScore = this.state.score + 1
    this.setState({ score: newScore})
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
  }

  FAILURE = () => {
    console.log('FAILURE')
    this.setState({ 
      clicked: [],
      score: 0 
    })
    this.kittyShuffle()
    return
  }

  render = () => (
    <Wrapper>
      <div className="basic-info">
        <div className="title-container">
          <h1 className="title">Kitty Klick</h1>
        </div>
        <div className="instructions">
          <p>Click each kitty only once!</p>
        </div>
      </div>
      <Header 
        score={this.state.score}
        highScore={this.state.highScore}
        className="header"
      />
      {
        this.state.kitties.map(kitty => {
          return (
            <KittyCard
              clickKitty={this.clickKitty}
              clicked={this.clicked}
              name={kitty.name}
              image={kitty.image}
              key={kitty.id}
              id={kitty.id}
            />)
        })
      }
    </Wrapper>
  );
}



// const App = () => (

//   <Wrapper>
//     <h1>Kitty Klick!</h1>
//     <KittyCard 
//       name={kitties[0].name}
//       image={kitties[0].image}  
//     />
//   </Wrapper>

// );



// render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//     </div>
//   );
// }


export default App;
