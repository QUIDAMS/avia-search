import React from "react";
import Menu from "../menu";
import AllTickets from "../allTickets";

const App = () => {

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-4 col-md-3 col-12">
					<Menu />
				</div>
				<div className="col-sm-8 col-md-9 col-12">
					<AllTickets />
				</div>
			</div>
		</div>
	)
}

export default App;