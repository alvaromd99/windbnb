import './App.css'
import Apartments from './components/Apartments'
import Header from './components/Header'
import { useState } from 'react'
import { apartments } from './data/Cities'
import { useEffect } from 'react'

function App() {
	const [filters, setFilters] = useState({
		city: 'all',
		guests: 50,
	})

	useEffect(() => {
		console.log(filters)
	}, [filters])

	const filterApartments = (apartments) => {
		return apartments.filter((apartment) => {
			return (
				apartment.maxGuests <= filters.guests &&
				(apartment.city === filters.city || filters.city === 'all')
			)
		})
	}

	const filteredApartments = filterApartments(apartments)

	return (
		<>
			<Header setFilters={setFilters} />
			<Apartments apartments={filteredApartments} />
		</>
	)
}

export default App
