import React, {useEffect} from 'react'

export function initApp(mapInstance: null | ymaps.Map) {
	if (!mapInstance) return

	const projection = mapInstance.options.get("projection")
	if (!projection) return

	const longitude = 51.81061
	const latitude = 55.171111
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