import { useState } from 'react'
import '../styles/DropDown.css'
import { useRef } from 'react'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export default function DropDown({ cities, selected, setSelected }) {
	const citiesArr = [...cities]
	const otherCities = citiesArr.slice(1)
	const [isActive, setIsActive] = useState(false)

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
				{citiesArr[0]}
			</div>
			<div className={`dropdown-content ${isActive ? '' : 'isNotActive'}`}>
				{otherCities.map((city, index) => (
					<div className='dropdown-item' key={index}>
						{city} , Finland
					</div>
				))}
			</div>
		</div>
	)
}
