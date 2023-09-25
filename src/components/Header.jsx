import data from '../../windbnb-master/stays.json'
import '../styles/Header.css'
import SearchIcon from '../icons/SearchIcon'
import DropDown from './DropDown'
import { useState } from 'react'

export default function Header() {
	const [selected, setSelected] = useState(false)

	const cities = new Set()

	for (const item of data) {
		cities.add(item.city)
	}

	return (
		<header>
			<img src='../../windbnb-master/logo.png' alt='Logo' />
			<div className='search-bar'>
				<div className='container location'>
					<DropDown
						cities={cities}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>
				<div className='container guest'>
					<input
						type='number'
						name='guest-selector'
						id='guest-selector'
						placeholder='Add guests'
					/>
				</div>
				<div className='container icon'>
					<SearchIcon />
				</div>
			</div>
		</header>
	)
}
