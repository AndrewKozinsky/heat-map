import {Map, YMaps} from '@pbe/react-yandex-maps'
import React, {useRef} from 'react'
import {initApp} from './fn/initApp.ts'
import './HeatMap.scss'

export function HeatMap() {
	const mapRef = useRef<null | ymaps.Map>(null)

	const longitude = 51.81061
	const latitude = 55.171111

	return (
		<div className='map-container'>
			<YMaps>
				<Map
					defaultState={{
						center: [longitude, latitude],
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
			<canvas className='canvas' />
		</div>
	)
}