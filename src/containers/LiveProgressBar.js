import React from 'react'
import { connect } from 'react-redux'
import { incrementProgress, setProgress } from '../actions'
import ProgressBar from '../components/ProgressBar'

const mapStateToProps = (state, ownProps) => {
  return {
  	progressIndex: state.progressIndex,
  	stepsCount: state.stepsCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onStepClick: index => {
  		dispatch(setProgress(index))
  	}
  }
}

const LiveProgressBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar)

export default LiveProgressBar