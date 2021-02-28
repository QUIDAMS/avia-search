import React from 'react';



const  Menu = ({chooseSort, onChangeFilter, oneTransfer, direct}) => {
	return(
		<div className="left-menu">
			<div className="left-menu__item">
				<div className="left-menu__item-title">Сортировать</div>
				<form>
					<div onChange={e => chooseSort(e)}>
						<div className="form-group mb-0">
							<input 
								type="radio" 
								name="sort" 
								className="mr-1" 
								id="priceDesc"
								value="risePrice"
							/>
							<label htmlFor="priceDesc">- по возрастанию цены </label>
						</div>
						<div className="form-group mb-0">
							<input 
								type="radio" 
								name="sort" 
								className="mr-1"  
								id="priceAsc"
								value="decreasePrice"
							/>
							<label htmlFor="priceAsc"> - по убыванию цены </label>
						</div>
						<div className="form-group mb-0">
							<input 
								type="radio" 
								name="sort" 
								className="mr-1" 
								id="timeDesc" 
								value="travelTime"
							/>
							<label htmlFor="timeDesc"> - по времени в пути </label>
						</div>
						
					</div>
				</form>
			</div>

			<div className="left-menu__item">
				<div className="left-menu__item-title">Фильтровать</div>
				<form>
					<div className="form-group mb-0">
						<input 
							name="oneTransfer" 
							type="checkbox" 
							className="mr-1" 
							id="oneTransfer" 
							onChange={(e) => {onChangeFilter(e)}}
							checked={oneTransfer}
						/>
						<label name="oneTransfer" htmlFor="oneTransfer"> - 1 пересадка </label>
					</div>
					<div className="form-group mb-0">
						<input 
							name="direct" 
							type="checkbox" 
							className="mr-1" 
							id="noTransfer" 
							onChange={(e) => {onChangeFilter(e)}}
							checked={direct}
						/>
						<label name="direct" htmlFor="noTransfer"> - без пересадок </label>
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