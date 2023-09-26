import '../styles/Header.css'
import SearchIcon from '../icons/SearchIcon'
import DropDown from './DropDown'
import { cities } from '../data/Cities'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Header({ setFilters }) {
	const [selectedCity, setSelectedCity] = useState('Helsinki')
	const [guestsNumber, setGuests] = useState('')

	const handleGuestsChange = (e) => {
		const newValue = e.target.value
		// Verificar si la entrada es un número
		const regex = /^\d+$/

		setGuests('')

		if (regex.test(newValue) && newValue !== '') {
			setGuests(Number(newValue))
		}
	}

	return (
		<header>
			<img
				src='../../windbnb-master/logo.png'
				alt='Logo'
				onClick={() => {
					setFilters({
						city: 'all',
						guests: 0,
					})
				}}
			/>
			<div className='search-bar'>
				<div className='container location'>
					<DropDown
						cities={cities}
						selected={selectedCity}
						setSelected={setSelectedCity}
					/>
				</div>
				<div className='container guest'>
					<input
						type='number'
						name='guest-selector'
						id='guest-selector'
						placeholder='Add guests'
						value={guestsNumber}
						onChange={handleGuestsChange}
					/>
				</div>
				<div
					className='container icon'
					onClick={() =>
						setFilters((prevState) => ({
							...prevState,
							city: selectedCity,
							guests: guestsNumber,
						}))
					}>
					<SearchIcon />
				</div>
			</div>
		</header>
	)
}
Header.propTypes = {
	filters: PropTypes.object,
	setFilters: PropTypes.func,
}
