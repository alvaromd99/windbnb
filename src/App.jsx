import './App.css'
import Apartments from './components/Apartments'
import Header from './components/Header'
import { useState } from 'react'
import { apartments } from './data/Cities'

function App() {
	const [filters, setFilters] = useState({
		city: 'all',
		guests: 0,
	})

	const filterApartments = (apartments) => {
		return apartments.filter((apartment) => {
			return (
				apartment.maxGuests >= filters.guests &&
				(apartment.city.toLowerCase() === filters.city.toLowerCase() ||
					filters.city === 'all')
			)
		})
	}

	console.log(filters)

	const filteredApartments = filterApartments(apartments)

	console.log(filteredApartments)

	return (
		<>
			<Header setFilters={setFilters} />
			<Apartments apartments={filteredApartments} />
		</>
	)
}

export default App
