import './Services.css'
import { BsLock, BsWifi, BsPower } from 'react-icons/bs'

const Services = () => {
	return (
		<div className="container service_container">
			<div className="row">
				<div className="col-md-8 col-sm-12">
					<div className=" service_card">
						<h2 className="service_title">Onboard services</h2>

						<div className="services_icon">
							<span>
								<BsLock />
							</span>
							<span>
								<BsWifi />
							</span>
							<span>
								<BsPower />
							</span>
						</div>
					</div>

					<div className="service_discover">
						<p>Enjoy a comfortable bus journey.</p>
						<button className="btn serviceBtn">Discover</button>
					</div>

					<div className="row">
						<div className="col-lg-6 col-sm-12">
							<img className="service_image" src="/images/london1.jpg" alt="london" />
							<div className="travel_detail">
								<p>London to Paris</p>
								<button className="btn serviceBtn">From 14,999$</button>
							</div>
						</div>

						<div className="col-lg-6 col-sm-12">
							<img className="service_image" src="/images/london1.jpg" alt="london" />
							<div className="travel_detail">
								<p>London to Paris</p>
								<button className="btn serviceBtn">From 14,999$</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-sm-12">
					<div className="discover_card">
						<h3>Discover All our Destinations</h3>
						<button className="btn discover_btn">Click for more</button>
					</div>

					<img className="map_image" src="/images/parismap.jpg" alt="paris" />
				</div>
			</div>
		</div>
	)
}

export default Services
