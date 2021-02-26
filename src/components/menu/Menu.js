import React from 'react';


const  Menu = () => {
	return(
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
	)
}

export default Menu;