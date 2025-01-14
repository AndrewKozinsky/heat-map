export type CanvasDotCoords = {
	x: number
	y: number
}

export interface MapStore {
	centerLongitude: number
	centerLatitude: number
	canvasDotsCoords: CanvasDotCoords[]
}