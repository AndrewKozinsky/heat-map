import {Map, YMaps} from '@pbe/react-yandex-maps'
import React, {useRef} from 'react'
import {useMapStore} from '../store/mapStore.ts'
import {useDrawCirclesOnCanvas} from './fn/drawCircles.ts'
import {initApp} from './fn/initApp.ts'
import './HeatMap.scss'

export function HeatMap() {
	const mapRef = useRef<null | ymaps.Map>(null)
	const canvasRef = useRef<null | HTMLCanvasElement>(null)

	useDrawCirclesOnCanvas(canvasRef.current)

	const centerLon = useMapStore(s => s.centerLongitude)
	const centerLat = useMapStore(s => s.centerLatitude)

	return (
		<div className='map-container'>
			<YMaps>
				<Map
					defaultState={{
						center: [centerLon, centerLat],
						zoom: 15,
					}}
					instanceRef={(ref) => {
						mapRef.current = ref
					}}
					width="100%"
					height="100%"
					onLoad={() => initApp(mapRef.current)}
				/>
			</YMaps>
			<canvas className='canvas' ref={canvasRef} />
		</div>
	)
}