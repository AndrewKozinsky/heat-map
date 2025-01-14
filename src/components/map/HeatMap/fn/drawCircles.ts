import {useEffect} from 'react'
import {useMapStore} from '../../store/mapStore.ts'
import {DotCoords} from '../../store/mapStoreTypes.ts'

export function useDrawCirclesOnCanvas(canvasRef: React.MutableRefObject<HTMLCanvasElement>) {
	const dotsCoords = useMapStore(s => s.canvasDotsCoords)

	useEffect(function () {
	    if (!canvasRef.current) return
		drawRedCirclesOnCanvas(canvasRef.current, dotsCoords)
	}, [canvasRef.current, dotsCoords])
}

function drawRedCirclesOnCanvas($canvas: HTMLCanvasElement, points: DotCoords[]): void {
	const ctx = $canvas.getContext('2d')

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