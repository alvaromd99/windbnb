import PropTypes from 'prop-types'
import StarIcon from '../icons/StarIcon'

export default function CardApartments({ apartment }) {
	return (
		<div className='card'>
			<img src={apartment.photo} alt={apartment.title} />
			<div className='description'>
				<div className='info'>
					<p className='general'>
						{apartment.superHost && <span>SUPER HOST</span>}{' '}
						<p>
							{apartment.type}
							{apartment.beds && ` . ${apartment.beds} beds`}
						</p>
					</p>
					<p className='rating'>
						<span>
							<StarIcon />
						</span>
						{apartment.rating}
					</p>
				</div>
			</div>
			<h2>{apartment.title}</h2>
		</div>
	)
}

CardApartments.propTypes = {
	apartment: PropTypes.object,
	index: PropTypes.number,
}
