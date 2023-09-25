import data from '../../windbnb-master/stays.json'

// Apartments
const apartments = data

// Cities
const cities = new Set()

for (const item of data) {
	cities.add(item.city)
}

export { cities, apartments }
