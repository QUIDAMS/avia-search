import React, { Component } from 'react';
import Ticket from "../ticket";


export default class AllTickets extends Component {

	state = {
		data: null,
	}

	componentDidMount(){
		fetch('flights.json')
		.then((response) => response.json())
		.then((data) => this.setState({data}))
		.catch((error) => console.error('Error', error));
	}
	render() {
		const {data} = this.state;
		if (!data) {
			return null
		}
		// eslint-disable-next-line array-callback-return
		const allflights = data.result.flights.slice(0,3).map((flight, i) => {
			return<Ticket key={i} flight={flight.flight}/>
		})
		return (
			<div>{allflights}</div>
		);
	}
}

