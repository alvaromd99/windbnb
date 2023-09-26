import PropTypes from 'prop-types'
import '../styles/Apartments.css'
import CardApartments from './CardApartments'

export default function Apartments({ apartments }) {
	return (
		<div className='cont'>
			<div className='header'>
				<h2>Stays in Finland</h2>
				<p>12+ stays</p>
			</div>
			<div className='apartments-cont'>
				{apartments.length === 0 && <h2>No match</h2>}
				{apartments.map((apartment, index) => (
					<CardApartments apartment={apartment} key={index} />
				))}
			</div>
		</div>
	)
}

Apartments.propTypes = {
	apartments: PropTypes.array,
}
