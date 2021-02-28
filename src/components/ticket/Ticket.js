import React from "react";
import Moment from 'react-moment';
import moment from "moment";
import 'moment/locale/ru';

const Ticket = (props) => {
	const {flight} = props;
	const airline = flight.carrier.caption;
	const allLegs = flight.legs.map((leg, i, arr) => {
		const firstSegment = leg.segments[0];
		const departureCity = (firstSegment.departureCity && firstSegment.departureCity.caption) || '[Not found]';
		const departureAirport = firstSegment.departureAirport.caption;
		const departureAbbreviation = firstSegment.departureAirport.uid;
		const departureDate = firstSegment.departureDate;

		const lastSegment = leg.segments[leg.segments.length - 1];
		const arrivalCity = (lastSegment.arrivalCity && lastSegment.arrivalCity.caption) || '[Not found]';
		const arrivalAirport = lastSegment.arrivalAirport.caption;
		const arrivalAbbreviation = lastSegment.arrivalAirport.uid;
		const arrivalDate = lastSegment.arrivalDate;
		const travelDuration = leg.duration;

		return(
			<React.Fragment key={i}>
				<div className="ticket__body">		
					<span className='ticket__airports'>
						{departureCity}, {departureAirport}
						<span className="blue-text"> ({departureAbbreviation})</span>
						<span className="blue-text mx-2">&rarr;</span>

						{arrivalCity}, {arrivalAirport}
						<span className="blue-text"> ({arrivalAbbreviation})</span>
					</span>
					<hr />
					<div className="row justify-content-between">
							<div className="col">
								<span className="ticket__time">
									<Moment locale="ru" format="HH:mm">
	                	{departureDate}
	            		</Moment>&nbsp;
	            	</span> 
            		<span className='blue-text'>
            			<Moment locale="ru" format="DD MMM dd">
	                	{departureDate}
	            		</Moment>
            		</span>
            	</div>
							<div className="col text-center">
								<span className="ticket__time">
									<span className="ticket__time">
										&#128340;&nbsp;{moment.unix(travelDuration*60).utc().format('H [ч] m [мин] ')}
									</span>
								</span>
							</div>
							<div className="col text-right">
            		<span className='blue-text'>
            			<Moment locale="ru" format="DD MMM dd">
	                	{arrivalDate}
	            		</Moment>&nbsp;
            		</span>
								<span className="ticket__time">
									<Moment locale="ru" format="HH:mm">
	                	{arrivalDate}
	            		</Moment>
	            	</span> 
							</div>
					</div>
					{leg.segments.length > 1 && <div className="text-center text-orange title"> {leg.segments.length - 1} пересадка </div> }
					<div className="mt-2">Рейс выполняет: {airline}</div>
					<div>{i !== (arr.length-1) ? <hr className="blue" /> : ''} </div>
				</div>
			</React.Fragment>
		)
	})
	return( 
		<>
			<div className="ticket mb-5">
				<div className="ticket-header">
					<div className="row justify-content-between">
						<div className="col">
							<img src={process.env.PUBLIC_URL + '/img/polish.png'} className='ticket__airline-logo' alt="" />
						</div>
						<div className="col text-right pt-2 mr-2">
							<div className="ticket__price">{parseInt(flight.price.totalFeeAndTaxes.amount)} {flight.price.totalFeeAndTaxes.currency}</div> 
							<div className="ticket__price-info">Стоимость для одного взрослого пассажира</div>
						</div>
					</div>
				</div>
				{allLegs}
				<button className='btn btn-block btn-orange mb-5'><div className='py-2'>Выбрать</div></button>
			</div>
		</>
	)
}

export default Ticket;
