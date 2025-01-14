export type GeoDotCoords = {
	long: number
	lat: number
}

export type CanvasDotCoords = {
	x: number
	y: number
}

export interface MapStore {
	mapInstance: null | ymaps.Map
	projection: null | object

	centerLongitude: number
	centerLatitude: number

	geoDots: GeoDotCoords[]
	canvasDotsCoords: CanvasDotCoords[]
}