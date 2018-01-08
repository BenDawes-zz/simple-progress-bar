export const incrementProgress = () => {
	return {
		type: 'INCREMENT_PROGRESS'
	}
}

export const setProgress = idx => {
	return {
		type: 'SET_PROGRESS',
		index: idx
	}
}

export const setStepsCount = count => {
	return {
		type: 'SET_STEPS_COUNT',
		count: count
	}
}