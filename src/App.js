import React from 'react';
import logo from './logo.png';
import Navbar from './components/Navbar';
import './App.css';
import './animate.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinLogo: true,
      textLink: true,
      hideNavbar: true
    }
  }

  toggleSpin = () => {
    this.setState(prevState => ({ spinLogo: !prevState.spinLogo }))
  }

  toggleText = () => {
    this.setState(prevState => ({ textLink: !prevState.textLink }))
  }

  showNavigator = () => {
    document.getElementById('nav-sidebar').style.display = 'block';
  }

  hideNavigator = () => {
    document.getElementById('nav-sidebar').style.display = 'none';
  }

  render() {
    return (

      <div className="App">
        <Navbar hideNavigator={this.hideNavigator} />
        <header className="App-header">
          <img
            src={logo}
            className={this.state.spinLogo ? "App-logo" : "App-logo animated pulse"}
            alt="logo"
            onMouseEnter={this.toggleSpin}
            onMouseLeave={this.toggleSpin}
            onClick={this.showNavigator}
          />
          <p className="home-text">
            Health, Fitness and Wellness.
          </p>
          <div
            className={this.state.textLink ? "App-link" : "App-link animated tada"}
            onMouseOver={this.toggleText}
          >
            <a
              href="/"
              rel="noopener noreferrer" >Click to Learn More</a>
          </div>
        </header>
      </div>
    );
  }
}


export default App;
