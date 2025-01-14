import {useEffect} from 'react'
import {useMapStore} from '../../store/mapStore.ts'
import {CanvasDotCoords} from '../../store/mapStoreTypes.ts'

export function useConvertGeoDotsToCanvasDotsAfterStart() {
	const projection = useMapStore(s => s.projection)
	const mapInstance = useMapStore(s => s.mapInstance)

	useEffect(function () {
		if (!mapInstance || !projection) return

		convertGeoDotsToCanvasDots()
	}, [mapInstance, projection])
}

export function useSetMoveMapEventListener() {
	const mapInstance = useMapStore(s => s.mapInstance)

	useEffect(function () {
		if (!mapInstance) return

		mapInstance.events.add('boundschange', (event: any) => {
			convertGeoDotsToCanvasDots()
		})
	}, [mapInstance])
}

function convertGeoDotsToCanvasDots() {
	const {mapInstance, projection, geoDots} = useMapStore.getState()
	if (!mapInstance || !projection) return

	const zoom = mapInstance.getZoom()

	const canvasDots: CanvasDotCoords[] = []

	geoDots.forEach(geoDot => {
		const globalPixelCoords = projection.toGlobalPixels([geoDot.long, geoDot.lat], zoom)
		const pagePixelCoords = mapInstance.converter.globalToPage(globalPixelCoords)
		canvasDots.push({
			x: pagePixelCoords[0], y: pagePixelCoords[1]
		})
	})

	useMapStore.setState({canvasDotsCoords: canvasDots})
}
