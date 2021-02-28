import React, {Component} from "react";
import Menu from "../menu";
import AllTickets from "../allTickets";

export default class App extends Component {
	state = {
		sort: null,
		oneTransfer: false,
		direct: false,
		flights: [],
		ticketsPerPage: 10,
		minPrice: '',
		maxPrice: '',
		aeroflot: false,
		lotPolish: false,
	}

	getTickets() {
		fetch('flights.json')
			.then((response) => response.json())
			.then((data) => {
				let flights = data.result.flights
				this.setState({flights})
			})
			.catch((error) => console.error('Error', error));
	}

	componentDidMount() {
		this.getTickets()
	}

	chooseSort(e){
		return(
			this.setState({sort: e.target.value})
		)
	}

	onChangeFilter(e){
		const {name, checked} = e.target;
		return(
			this.setState({[name]: checked})
		)
	}

	onChangeTicketsPerPage(){
		let newTicketsPerPage = this.state.ticketsPerPage + 2;
		this.setState({ticketsPerPage: newTicketsPerPage})
	}

	onChangePrice(e, field){
		let val
		if(e.target.value.length > 0) {
			val = +e.target.value
		} else {
			val = null
		}
		this.setState({[field]: val})
	}

	onChangeAirline(e){
		const {name, checked} = e.target;
		return(
			this.setState({[name]: checked})
		)
	}

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-4 col-md-3 col-12">
						<Menu 
							chooseSort={(e) => this.chooseSort(e)}
							onChangeFilter={(e) => this.onChangeFilter(e)}
							oneTransfer={this.state.oneTransfer}
							direct={this.state.direct}
							minPrice={this.state.minPrice}
							maxPrice={this.state.maxPrice}
							onChangePrice={(e, field) => this.onChangePrice(e, field)}
							aeroflot={this.state.aeroflot}
							lotPolish={this.state.lotPolish}
							onChangeAirline={(e) => this.onChangeAirline(e)}
						/>
					</div>
					<div className="col-sm-8 col-md-9 col-12 ">
						<AllTickets 
							sort={this.state.sort}
							oneTransfer={this.state.oneTransfer}
							direct={this.state.direct}
							flights={this.state.flights}
							minPrice={this.state.minPrice}
							maxPrice={this.state.maxPrice}
							ticketsPerPage={this.state.ticketsPerPage}
							aeroflot={this.state.aeroflot}
							lotPolish={this.state.lotPolish}
						/>
						<div className="text-center my-5">
							<button 
								type="button" 
								className="button-show"
								onClick={() => this.onChangeTicketsPerPage()}>Показать еще</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

