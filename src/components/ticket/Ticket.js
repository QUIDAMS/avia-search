import React from "react";
import Moment from 'react-moment';
import moment from "moment";
import 'moment/locale/ru';

const Ticket = (props) => {
	const {flight} = props;

	const allLegs = flight.legs.map((leg) => {
		const allSegmentsPlace = leg.segments.map((segment) => {
			const departureCity = (segment.departureCity && segment.departureCity.caption) || '[Not found]';
			const departureAirport = segment.departureAirport.caption;
			const departureAbbreviation = segment.departureAirport.uid;

			const arrivalCity = (segment.arrivalCity && segment.arrivalCity.caption) || '[Not found]';
			const arrivalAirport = segment.arrivalAirport.caption;
			const arrivalAbbreviation = segment.arrivalAirport.uid;

			const arrivalDate = segment.arrivalDate;
			const departureDate = segment.departureDate;
			const travelDuration = segment.travelDuration;

			const airline = segment.airline.caption;
			return(
				<React.Fragment>
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
					<div className="text-center text-orange"> 1 пересадка </div>
					<div className="mt-2">Рейс выполняет: {airline}</div>
					<hr className="blue" />
				</React.Fragment>
			)
		})

		return(
			<React.Fragment>
				<div className="ticket__body">		
					{allSegmentsPlace}
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
							<div className="ticket__price">{parseInt(flight.price.passengerPrices[0].feeAndTaxes.amount)} {flight.price.passengerPrices[0].feeAndTaxes.currency}</div>
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


// <div className="ticket mb-5">
// 				<div className="ticket-header">
// 					<div className="row justify-content-between">
// 						<div className="col">
// 							<img src={process.env.PUBLIC_URL + '/img/polish.png'} className='ticket__airline-logo' alt="" />
// 						</div>
// 						<div className="col text-right pt-2 mr-2">
// 							<div className="ticket__price">21049 ₽</div>
// 							<div className="ticket__price-info">Стоимость для одного взрослого пассажира</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="ticket__body">
// 					<span className='ticket__airports'>
// 						Москва, ШЕРЕМЕТЬЕВО
// 						<span className="blue-text"> (SVO)</span>
// 						<span className="blue-text mx-2">&rarr;</span>
// 					</span>
// 					<span className='ticket__airports'>
// 						ЛОНДОН, Лодно, Хитроу
// 						<span className="blue-text"> (LHR)</span>
// 					</span>
// 					<hr />
// 					<div className="row justify-content-between">
// 							<div className="col"><span className="ticket__time">20:40</span> <span className='blue-text'>18 авг. вт</span></div>
// 							<div className="col text-center"><span className="ticket__time">14 ч 45 мин</span></div>
// 							<div className="col text-right"><span className='blue-text'>18 авг. вт</span><span className="ticket__time"> 20:40</span></div>
// 					</div>
// 					<div className="text-center text-orange"> 1 пересадка </div>
// 					<div className="mt-2">Рейс выполняет: LOT Polish Airlines</div>
// 				</div>
// 				<hr className="blue" />
// 				<div className="ticket__body">
// 					<span className='ticket__airports'>
// 						Москва, ШЕРЕМЕТЬЕВО
// 						<span className="blue-text"> (SVO)</span>
// 						<span className="blue-text mx-2">&rarr;</span>
// 					</span>
// 					<span className='ticket__airports'>
// 						ЛОНДОН, Лодно, Хитроу
// 						<span className="blue-text"> (LHR)</span>
// 					</span>
// 					<hr />
// 					<div className="row justify-content-between">
// 							<div className="col"><span className="ticket__time">20:40</span> <span className='blue-text'>18 авг. вт</span></div>
// 							<div className="col text-center"><span className="ticket__time">14 ч 45 мин</span></div>
// 							<div className="col text-right"><span className='blue-text'>18 авг. вт</span><span className="ticket__time"> 20:40</span></div>
// 					</div>
// 					<div className="text-center text-orange"> 1 пересадка </div>
// 					<div className="mt-2">Рейс выполняет: LOT Polish Airlines</div>
// 				</div>
// 				<button className='btn btn-block btn-orange'><div className='py-2'>Выбрать</div></button>
// 			</div>