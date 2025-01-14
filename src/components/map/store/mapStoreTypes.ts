export type GeoDotCoords = {
	long: number
	lat: number
}

export type CanvasDotCoords = {
	x: number
	y: number
}

export interface MapStore {
	centerLongitude: number
	centerLatitude: number

	geoDots: GeoDotCoords[]
	canvasDotsCoords: CanvasDotCoords[]
}