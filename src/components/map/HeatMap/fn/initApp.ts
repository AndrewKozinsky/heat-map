import {useMapStore} from '../../store/mapStore.ts'

export function initApp(
	mapInstance: null | ymaps.Map,
) {
	if (!mapInstance) return

	const projection = mapInstance.options.get("projection")
	if (!projection) return

	useMapStore.setState({projection})
	useMapStore.setState({mapInstance})
}