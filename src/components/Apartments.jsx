import PropTypes from 'prop-types'

export default function Apartments({ apartments }) {
	console.log(apartments)
	return (
		<div className='apartments-cont'>
			{apartments.map((apartment, index) => (
				<div className='card' key={index}>
					<img src={apartment.photo} alt={apartment.title} />
				</div>
			))}
		</div>
	)
}

Apartments.propTypes = {
	apartments: PropTypes.array,
}
