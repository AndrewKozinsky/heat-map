import axios from 'axios'
import {useEffect} from 'react'

export function useGetCoords() {
	useEffect(() => {
		// getCoords()
	}, [])
}

async function getCoords() {
	const API_KEY = '0efcd236-2829-4df0-818c-8c7b2ffb3387'

	const address = 'Оренбург,+ул.+Транспортная,+16/4';
	const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&geocode=${address}&format=json`

	/*axios.get(url).then((response) => {
		console.log(response.data.response)
	})*/
	// {pos: '55.171111 51.81061'}

	return 1
}