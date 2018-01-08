import React from 'react'
import { connect } from 'react-redux'
import { incrementProgress } from '../actions'

let NextButton = ({ dispatch }) => {
  return (
    <div style={{display: "inline-block"}}>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(incrementProgress())
        }}
      >
        <button type="submit">
          Next
        </button>
      </form>
    </div>
  )
}
NextButton = connect()(NextButton)

export default NextButton