
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setStepsCount, setProgress } from '../actions'

class StepsSlider extends Component {
	render() {
	  return (
	  	<div>
		  <input type="range" min="2" max="5" value={this.props.stepsCount} id="stepsRange" onChange={(e) => {this.props.onChange(e.target.value);}}/>
		</div>
	  )
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
  	stepsCount: state.stepsCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onChange: newCount => {
  		dispatch(setStepsCount(newCount))
  		dispatch(setProgress(0))
  	}
  }
}

StepsSlider = connect(mapStateToProps,mapDispatchToProps)(StepsSlider)

export default StepsSlider