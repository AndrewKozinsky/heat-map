import {useEffect} from 'react'
import {useMapStore} from '../../store/mapStore.ts'
import {CanvasDotCoords} from '../../store/mapStoreTypes.ts'

export function useDrawCirclesOnCanvas(canvasRef: React.MutableRefObject<HTMLCanvasElement>) {
	const dotsCoords = useMapStore(s => s.canvasDotsCoords)

	useEffect(function () {
	    if (!canvasRef.current) return
		drawRedCirclesOnCanvas(canvasRef.current, dotsCoords)
	}, [canvasRef.current, dotsCoords])
}

function drawRedCirclesOnCanvas($canvas: HTMLCanvasElement, points: CanvasDotCoords[]): void {
	const ctx = $canvas.getContext('2d')

	if (!ctx) {
		console.error('Could not get canvas context')
		return
	}

	ctx.clearRect(0, 0, 5000, 3000)
	ctx.fillStyle = 'red'

	points.forEach(point => {
		ctx.beginPath()
		ctx.arc(point.x - 2, point.y - 2, 4, 0, Math.PI * 2)
		ctx.fill()
		ctx.closePath()
	})
}