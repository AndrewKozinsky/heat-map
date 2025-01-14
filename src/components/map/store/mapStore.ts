import {create} from 'zustand'
import {MapStore} from './mapStoreTypes.ts'

export const useMapStore = create<MapStore>()((set) => ({
	centerLongitude: 51.81061,
	centerLatitude: 55.171111,
	geoDots: [
		{long: 51.81061, lat: 55.171111},
	],
	canvasDotsCoords: []
}))

