import { useState } from 'react'
import '../styles/DropDown.css'
import { useRef } from 'react'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export default function DropDown({ cities, selected, setSelected }) {
	const citiesArr = [...cities]
	const otherCities = citiesArr.filter((c) => c !== selected)
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		setSelected(citiesArr[0])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const changeSelected = (city) => {
		setSelected(city)
		setIsActive(false)
	}

	const toggleActive = () => {
		setIsActive(!isActive)
	}

	// Clicking outside the menu closes it
	let menuRef = useRef()

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setIsActive(false)
			}
		}

		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	})

	return (
		<div className='dropdown' ref={menuRef}>
			<div className='dropdown-btn' onClick={toggleActive}>
				{selected} , Finland
			</div>
			<div className={`dropdown-content ${isActive ? '' : 'isNotActive'}`}>
				{otherCities.map((city, index) => (
					<div
						className='dropdown-item'
						key={index}
						onClick={() => changeSelected(city)}>
						{city} , Finland
					</div>
				))}
			</div>
		</div>
	)
}
