import {useEffect} from 'react'
import {useMapStore} from '../../store/mapStore.ts'
import {GeoDotCoords} from '../../store/mapStoreTypes.ts'

export function usePopulateGeoDotsWithRandomCoords() {
	useEffect(function () {
		// x 51.815 -> 51.807
		// y 55.1600 -> 55.182
	    const randomGeoDots = generateRandomDots(51.816, 55.158, -0.01, 0.025, 1000)
		useMapStore.setState({geoDots: randomGeoDots})
	}, [])
}

function generateRandomDots(
	x: number,
	y: number,
	width: number,
	height: number,
	dotCount: number
): GeoDotCoords[] {
	const dots: GeoDotCoords[] = []

	for (let i = 0; i < dotCount; i++) {
		const randomX = x + Math.random() * width
		const randomY = y + Math.random() * height
		dots.push({ long: randomX, lat: randomY })
	}

	return dots
}
