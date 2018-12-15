import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'YOUR_API_KEY'
})

const particlesOptions = {
  particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800 
        }
      }
    }
  }


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
.predict(
Clarifai.COLOR_MODEL,
 // URL
 "https://samples.clarifai.com/metro-north.jpg"
)
.then(function(response) {
 // do something with responseconsole.log(response);
 },
 function(err) {// there was an error}
);
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
            params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
