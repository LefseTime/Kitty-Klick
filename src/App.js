import React, { Component } from 'react';
import KittyCard from "./components/KittyCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import kitties from "./kitties.json";
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    kitties: kitties,
    clicked: false,
    fail: false
  }

  clickKitty = () => {
    console.log('yaaaasssssss')

    if (this.state.clicked === false) {this.setState({ clicked: true})}
    else if (this.state.clicked === true) {this.setState({fail: true})}
  }

  render = () => (
    <Wrapper>
      <Header />
      <div className="basic-info">
        <div className="title-container">
            <h1 className="title">Kitty Klick</h1>
        </div>
        <div className="instructions">
            <p>Click each kitty only once!</p>
        </div>
    </div>
      {
        this.state.kitties.map(kitty => {
          return (
            <KittyCard
              clickKitty={this.clickKitty}
              name={kitty.name}
              image={kitty.image}
              key={kitty.id}
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
