import {useEffect} from 'react'
import {useMapStore} from '../../store/mapStore.ts'
import {simpleheat} from './simpleheat.ts'

export function useDrawHeatOnCanvas(canvasRef: React.MutableRefObject<HTMLCanvasElement>) {
	const canvasDotsCoords = useMapStore(s => s.canvasDotsCoords)

	useEffect(function () {
		if (!canvasRef.current || !canvasDotsCoords.length) return

		const data = canvasDotsCoords.map(dot => {
			return [dot.x, dot.y, 1]
		})

		const heat = simpleheat(canvasRef.current)
		heat.data(data)
		heat.radius(12, 15) //Radius (blur) of points
		heat.draw()
	}, [canvasRef.current, canvasDotsCoords])
}