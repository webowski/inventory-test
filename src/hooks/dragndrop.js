const ball = document.getElementById('.inventory__cell')

ball.addEventListener('mousedown', (e) => {
	const coords = getCoords(ball)
	const shiftX = e.pageX - coords.left
	const shiftY = e.pageY - coords.top

	ball.style.position = 'absolute'
	document.body.appendChild(ball)
	moveAt(e)

	ball.style.zIndex = 50

	function moveAt(e) {
		ball.style.left = e.pageX - shiftX + 'px'
		ball.style.top = e.pageY - shiftY + 'px'
	}

	document.addEventListener('mousemove', (e) => {
		moveAt(e)
	})

	// function handleMousemove(e) {
	// 	moveAt(e)
	// }

	ball.addEventListener('mouseup', () => {
		document.onmousemove = null
		ball.onmouseup = null
	})
})

ball.addEventListener('dragstart', () => {
	return false
})

function getCoords(elem) {
	const box = elem.getBoundingClientRect()
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	}
}
