const elementsNodeList = document.querySelectorAll('[data-elements]')
const elements = Array.from(elementsNodeList)
const selectionElement = (valueData) => {
	const element = elements.filter(e => e.dataset.elements === valueData)[0]
	return element
}

const elementPoleSeconds = selectionElement('pole_seconds')
const elementPoleMinutes = selectionElement('pole_minutes')
const elementPoleHours = selectionElement('pole_hours')

const setNumbersPosition = () => {
	for (let index = 1; index < 13; index++) {
		const factorElement = () => {
			if (index == 12) {
				return 0
			}
			const factorNumber = index * 30
			return factorNumber + 'deg'
		}
		const element = selectionElement(`number-${index}`)
		console.log(element)
		element.style.setProperty('--rotation', factorElement())

	}
}

setNumbersPosition()

const setPolePosition = (element, rotatePercentage) => {
	element.style.setProperty('--rotation', rotatePercentage * 360)
}


const getValuePoles = () => {
	const currentTime = new Date()

	const secondsPercentage = currentTime.getSeconds() / 60
	const minutesPercentage = (secondsPercentage + currentTime.getMinutes()) / 60
	const hoursPercentage = (minutesPercentage + currentTime.getHours()) / 12

	setPolePosition(elementPoleSeconds, secondsPercentage)
	setPolePosition(elementPoleMinutes, minutesPercentage)
	setPolePosition(elementPoleHours, hoursPercentage)
}

getValuePoles()
setInterval(getValuePoles, 1000)