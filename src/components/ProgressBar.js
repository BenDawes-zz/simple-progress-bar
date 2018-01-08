import React, { Component } from 'react';
import '../styles/ProgressBar.css';

class ProgressBar extends Component {
  render() {

    let stepsAndLinks = this.props.steps.slice(0,this.props.stepsCount).map((stepText, index) => {

      let status = "inactive"

      if(index < this.props.progressIndex) {
        status = "complete"
      } else if(index == this.props.progressIndex) {
        status = "active"
      }

      let link = <div className="link"/>

      return (
        <div className={'step ' + status}>
          <div className="dot" onClick={(e) => { e.preventDefault(); this.props.onStepClick(index);}}>
            <div className="label">
              <p>{stepText}</p>
            </div>
          </div>
          {index < this.props.stepsCount-1 && link}
        </div>
      )
    })

    return (
      <div className="progress-bar-container">
        {stepsAndLinks}
      </div>
    );
  }
}

export default ProgressBar;
