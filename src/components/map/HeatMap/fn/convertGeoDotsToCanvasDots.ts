import {useEffect} from 'react'
import {useMapStore} from '../../store/mapStore.ts'

export function useConvertGeoDotsToCanvasDots(mapRef: React.MutableRefObject<ymaps.Map>) {
	const geoDots = useMapStore(s => s.geoDots)

		console.log(mapRef.current)
}