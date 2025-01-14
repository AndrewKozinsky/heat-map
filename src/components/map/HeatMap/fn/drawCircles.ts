import {useEffect} from 'react'
import {useMapStore} from '../../store/mapStore.ts'
import {CanvasDotCoords} from '../../store/mapStoreTypes.ts'

export function useDrawCirclesOnCanvas($canvas: null | HTMLCanvasElement) {
	const dotsCoords = useMapStore(s => s.canvasDotsCoords)

	useEffect(function () {
		console.log($canvas)
	    if (!$canvas) return

		console.log('Ready')
		drawRedCirclesOnCanvas($canvas, dotsCoords)
	}, [$canvas, dotsCoords])
}

function drawRedCirclesOnCanvas($canvas: HTMLCanvasElement, points: CanvasDotCoords[]): void {
	const ctx = $canvas.getContext('2d')
	console.log(444)

	if (!ctx) {
		console.error('Could not get canvas context')
		return
	}


	ctx.fillStyle = 'red'

	points.forEach(point => {
		ctx.beginPath()

		ctx.arc(point.x, point.y, 5, 0, Math.PI * 2)

		ctx.fill()

		ctx.closePath()
	})
}