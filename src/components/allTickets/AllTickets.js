import React, { Component } from 'react';
import Ticket from "../ticket";


export default class AllTickets extends Component {
	sortFlights(flights, sort) {
		return flights.sort((a, b) => {
			switch (sort) {
			  case "risePrice":
					return a.flight.price.totalFeeAndTaxes.amount - b.flight.price.totalFeeAndTaxes.amount;
			  case "decreasePrice":
					return b.flight.price.totalFeeAndTaxes.amount - a.flight.price.totalFeeAndTaxes.amount;
			  case "travelTime":
			  	const aa = a.flight.legs.reduce(
			  		(previousValue, currentValue) => {
			  			return previousValue + currentValue.duration;
						}, 0
					) 
			  	const bb = b.flight.legs.reduce(
			  		(previousValue, currentValue) => {
			  			return previousValue + currentValue.duration;
			  		}, 0
			  	)
			  	return aa - bb;
			  default:
			  	return null;
			}
		})
	}

	filterFlights(flights, direct, oneTransfer) {
		return flights.filter(flight => {
			return flight.flight.legs.every(leg => {
				
				let filters = []
				
				if(direct) {
					filters.push(leg.segments.length === 1)
				}

				if(oneTransfer) {
					filters.push(leg.segments.length === 2)
				}
				return filters.length === 0 ? true : filters.some(value => value === true) // если хотябы 1 true
			})
		})
	}

	pagination(flights, ticketsPerPage) {
		return flights.slice(0, ticketsPerPage)
	}

	priceFilter(flights, minPrice, maxPrice){
		return flights.filter((flight) => {

			if(!minPrice) {
				minPrice = 0
			}

			if(!maxPrice) {
				maxPrice = Infinity
			}
			return (
				flight.flight.price.totalFeeAndTaxes.amount >= minPrice && flight.flight.price.totalFeeAndTaxes.amount <= maxPrice
			) 
		})
	}

	applyFilters(flights, sort, direct, oneTransfer, ticketsPerPage, minPrice, maxPrice) {
		let f = flights
		f = this.filterFlights(f, direct, oneTransfer)
		f = this.priceFilter(f, minPrice, maxPrice)
		f = this.sortFlights(f, sort)
		f = this.pagination(f, ticketsPerPage)
		return f
	}

	render() {
		const {sort, oneTransfer, direct, flights, ticketsPerPage, minPrice, maxPrice} = this.props;
		let sortedFlights = this.applyFilters(flights, sort, direct, oneTransfer, ticketsPerPage, minPrice, maxPrice)

		const allflights = sortedFlights.map((flight, i) => {
			return <Ticket key={i} flight={flight.flight}/>
		})
		return (
			<div>{allflights}</div>
		);
	}
}

