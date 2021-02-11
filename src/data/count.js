import { useEffect, useState } from 'react'
import jsonData from './doffin-bach-default-rtdb-F02_2014-export.json'

function Count() {
	const [cpvCount, setCpvCount] = useState()
	let cpvNumbers = Object.values(jsonData).map((js) => js.cpvnumber)

	let firstTwo = cpvNumbers.map((js) => js.split('').slice(0, 2).join(''))
	let count = {}
	firstTwo.forEach((i) => (count[i] = (count[i] || 0) + 1))
	setCpvCount(count)
	// console.log(count)

	return <h1>Hello</h1>
}

export default Count
