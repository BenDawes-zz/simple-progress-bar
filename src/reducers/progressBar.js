import { combineReducers } from 'redux'

const progressIndex = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT_PROGRESS':
			return state + 1
		case 'SET_PROGRESS':
			return action.index
		default:
			return state
	}
}

const stepsCount = (state = 5, action) => {
	switch(action.type) {
		case 'SET_STEPS_COUNT':
			return action.count
		default:
			return state
	}
}

const progressBar = combineReducers({
	progressIndex,
	stepsCount
})

export default progressBar