import './Destinations.css'

const Destinations = () => {
	return (
		<div className="container">
			<h4 className="">Top Destinations </h4>

			<div className="row">
				<div className="col-lg-4 col-md-6 destination_col">
					<div className="destination_card">
						<img variant="top" src="images/paris.jpg" alt="paris" style={{ width: '18rem', height: '18rem' }} />
						<span>
							<p>PARIS</p>
							<button className="btn destinationBtn">From 14,99$</button>
						</span>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 destination_col">
					<div className="destination_card">
						<img variant="top" src="images/paris3.jpg" alt="paris" style={{ width: '18rem', height: '18rem' }} />
						<span>
							<p>PARIS</p>
							<button className="btn destinationBtn">From 14,99$</button>
						</span>
					</div>
				</div>

				<div className="col-lg-4 col-md-6 destination_col">
					<div className="destination_card">
						<img variant="top" src="images/paris2.jpg" alt="paris" style={{ width: '18rem', height: '18rem' }} />
						<span>
							<p>PARIS</p>
							<button className="btn destinationBtn">From 14,99$</button>
						</span>
					</div>
				</div>

				<div className="col-lg-4 col-md-6 destination_col">
					<div className="destination_card">
						<img variant="top" src="images/paris4.jpg" alt="paris" style={{ width: '18rem', height: '18rem' }} />
						<span>
							<p>PARIS</p>
							<button className="btn destinationBtn">From 14,99$</button>
						</span>
					</div>
				</div>

				<div className="col-lg-4 col-md-6 destination_col">
					<div className="destination_card">
						<img variant="top" src="images/paris.jpg" alt="paris" style={{ width: '18rem', height: '18rem' }} />
						<span>
							<p>PARIS</p>
							<button className="btn destinationBtn">From 14,99$</button>
						</span>
					</div>
				</div>

				<div className="col-lg-4 col-md-6 destination_col">
					<div className="destination_card">
						<img variant="top" src="images/paris.jpg" alt="paris" style={{ width: '18rem', height: '18rem' }} />
						<span>
							<p>PARIS</p>
							<button className="btn destinationBtn">From 14,99$</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Destinations
