import {useMapStore} from '../../store/mapStore.ts'

export function initApp(mapInstance: null | ymaps.Map) {
	if (!mapInstance) return

	const projection = mapInstance.options.get("projection")
	if (!projection) return

	const longitude = useMapStore.getState().centerLongitude
	const latitude = useMapStore.getState().centerLatitude

	const zoom = mapInstance.getZoom()

	const globalPixelCoords = projection.toGlobalPixels([longitude,latitude], zoom)

	const pagePixelCoords = mapInstance.converter.globalToPage(globalPixelCoords)
	console.log("Page pixel coordinates:", pagePixelCoords)

	// Subscribe to the 'boundschange' event to detect map movements
	mapInstance.events.add('boundschange', (event: any) => {
		const newCenter = event.get('newCenter');
		console.log('Map moved to:', newCenter);
	});
}