import {create} from 'zustand'
import {MapStore} from './mapStoreTypes.ts'

export const useMapStore = create<MapStore>()((set) => ({
	centerLongitude: 51.81061,
	centerLatitude: 55.171111,
	canvasDotsCoords: [
		{x: 308, y: 208},
		{x: 288, y: 188},
	]
}))

