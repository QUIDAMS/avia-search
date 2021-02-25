import React from 'react';

const App = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-4 col-md-3 col-12">
					<div className="left-menu">
						<div className="left-menu__item">
							<div className="left-menu__item-title">Сортировать</div>
							<form>
								<div className="form-group mb-0">
									<input type="radio" name="sort" className="mr-1" id="priceDesc" />
									<label htmlFor="priceDesc">- по возрастанию цены </label>
								</div>
								<div className="form-group mb-0">
									<input type="radio" name="sort" className="mr-1"  id="priceAsc"/>
									<label htmlFor="pricesAsc"> - по убыванию цены </label>
								</div>
								<div className="form-group mb-0">
									<input type="radio" name="sort" className="mr-1" id="timeDesc" />
									<label htmlFor="timeDesc"> - по времени в пути </label>
								</div>
							</form>
						</div>

						<div className="left-menu__item">
							<div className="left-menu__item-title">Фильтровать</div>
							<form>
								<div className="form-group mb-0">
									<input type="checkbox" className="mr-1" id="oneTransfer" />
									<label htmlFor="oneTransfer"> - по возрастанию цены </label>
								</div>
								<div className="form-group mb-0">
									<input type="checkbox" className="mr-1" id="noTransfer" />
									<label htmlFor="noTransfer"> - по возрастанию цены </label>
								</div>
							</form>
						</div>

						<div className="left-menu__item">
							<div className="left-menu__item-title">Цена</div>
							<form>
								<div className="form-group mb-3">
									<label htmlFor="oneTransfer" className="mr-1">От</label>
									<input type="text" id="oneTransfer" />
								</div>
								<div className="form-group mb-3">
									<label htmlFor="noTransfer" className="mr-1">До</label>
									<input type="text" id="noTransfer" />
								</div>
							</form>
						</div>

						<div className="left-menu__item">
							<div className="left-menu__item-title">Авиакомпании</div>
							<form>
								<div className="form-group mb-0">
									<input type="checkbox" className="mr-1" id="oneTransfer" />
									<label htmlFor="oneTransfer"> - LOT Polish </label>
								</div>
								<div className="form-group mb-0">
									<input type="checkbox" className="mr-1" id="noTransfer" />
									<label htmlFor="noTransfer"> - Аэрофлот </label>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-sm-8 col-md-9 col-12">
					<div className="ticket mb-5">
						<div className="ticket-header">
							<div className="row justify-content-between">
								<div className="col">
									<img src={process.env.PUBLIC_URL + '/img/polish.png'} className='ticket__airline-logo' alt="" />
								</div>
								<div className="col text-right pt-2 mr-2">
									<div className="ticket__price">21049 ₽</div>
									<div className="ticket__price-info">Стоимость для одного взрослого пассажира</div>
								</div>
							</div>
						</div>
						<div className="ticket__body">
							<span className='ticket__airports'>
								Москва, ШЕРЕМЕТЬЕВО
								<span className="blue-text"> (SVO)</span>
								<span className="blue-text mx-2">&rarr;</span>
							</span>
							<span className='ticket__airports'>
								ЛОНДОН, Лодно, Хитроу
								<span className="blue-text"> (LHR)</span>
							</span>
							<hr />
							<div className="row justify-content-between">
 								<div className="col"><span className="ticket__time">20:40</span> <span className='blue-text'>18 авг. вт</span></div>
 								<div className="col text-center"><span className="ticket__time">14 ч 45 мин</span></div>
 								<div className="col text-right"><span className='blue-text'>18 авг. вт</span><span className="ticket__time"> 20:40</span></div>
							</div>
							<div className="text-center text-orange"> 1 пересадка </div>
							<div className="mt-2">Рейс выполняет: LOT Polish Airlines</div>
						</div>
						<hr className="blue" />
						<div className="ticket__body">
							<span className='ticket__airports'>
								Москва, ШЕРЕМЕТЬЕВО
								<span className="blue-text"> (SVO)</span>
								<span className="blue-text mx-2">&rarr;</span>
							</span>
							<span className='ticket__airports'>
								ЛОНДОН, Лодно, Хитроу
								<span className="blue-text"> (LHR)</span>
							</span>
							<hr />
							<div className="row justify-content-between">
 								<div className="col"><span className="ticket__time">20:40</span> <span className='blue-text'>18 авг. вт</span></div>
 								<div className="col text-center"><span className="ticket__time">14 ч 45 мин</span></div>
 								<div className="col text-right"><span className='blue-text'>18 авг. вт</span><span className="ticket__time"> 20:40</span></div>
							</div>
							<div className="text-center text-orange"> 1 пересадка </div>
							<div className="mt-2">Рейс выполняет: LOT Polish Airlines</div>
						</div>
						<button className='btn btn-block btn-orange'><div className='py-2'>Выбрать</div></button>
					</div><div className="ticket mb-5">
						<div className="ticket-header">
							<div className="row justify-content-between">
								<div className="col">
									<img src={process.env.PUBLIC_URL + '/img/polish.png'} className='ticket__airline-logo' alt="" />
								</div>
								<div className="col text-right pt-2 mr-2">
									<div className="ticket__price">21049 ₽</div>
									<div className="ticket__price-info">Стоимость для одного взрослого пассажира</div>
								</div>
							</div>
						</div>
						<div className="ticket__body">
							<span className='ticket__airports'>
								Москва, ШЕРЕМЕТЬЕВО
								<span className="blue-text"> (SVO)</span>
								<span className="blue-text mx-2">&rarr;</span>
							</span>
							<span className='ticket__airports'>
								ЛОНДОН, Лодно, Хитроу
								<span className="blue-text"> (LHR)</span>
							</span>
							<hr />
							<div className="row justify-content-between">
 								<div className="col"><span className="ticket__time">20:40</span> <span className='blue-text'>18 авг. вт</span></div>
 								<div className="col text-center"><span className="ticket__time">14 ч 45 мин</span></div>
 								<div className="col text-right"><span className='blue-text'>18 авг. вт</span><span className="ticket__time"> 20:40</span></div>
							</div>
							<div className="text-center text-orange"> 1 пересадка </div>
							<div className="mt-2">Рейс выполняет: LOT Polish Airlines</div>
						</div>
						<hr className="blue" />
						<div className="ticket__body">
							<span className='ticket__airports'>
								Москва, ШЕРЕМЕТЬЕВО
								<span className="blue-text"> (SVO)</span>
								<span className="blue-text mx-2">&rarr;</span>
							</span>
							<span className='ticket__airports'>
								ЛОНДОН, Лодно, Хитроу
								<span className="blue-text"> (LHR)</span>
							</span>
							<hr />
							<div className="row justify-content-between">
 								<div className="col"><span className="ticket__time">20:40</span> <span className='blue-text'>18 авг. вт</span></div>
 								<div className="col text-center"><span className="ticket__time">14 ч 45 мин</span></div>
 								<div className="col text-right"><span className='blue-text'>18 авг. вт</span><span className="ticket__time"> 20:40</span></div>
							</div>
							<div className="text-center text-orange"> 1 пересадка </div>
							<div className="mt-2">Рейс выполняет: LOT Polish Airlines</div>
						</div>
						<button className='btn btn-block btn-orange'><div className='py-2'>Выбрать</div></button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;