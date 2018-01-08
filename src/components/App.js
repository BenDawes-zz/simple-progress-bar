import React, { Component } from 'react';
import './App.css';
import LiveProgressBar from '../containers/LiveProgressBar.js'
import NextButton from '../containers/NextButton.js'
import StepsSlider from '../containers/StepsSlider.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import progressBar from '../reducers/progressBar.js'

let store = createStore(progressBar)

let exampleSteps = [
  'Design',
  'Build',
  'Launch',
  'Orbit',
  'Deploy'
]

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="progress-bar-demo">
          <LiveProgressBar steps={exampleSteps}/>
          Adjust steps count:
          <StepsSlider/>
          <NextButton/>
        </div>
      </Provider>
    );
  }
}

export default App
