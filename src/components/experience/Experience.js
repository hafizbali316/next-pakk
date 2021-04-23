import './Experience.css'
import { FiUsers } from 'react-icons/fi'
import { GoLocation, GoThumbsup } from 'react-icons/go'
import { GiWorld } from 'react-icons/gi'

const Experience = () => {
	return (
		<div className="container">
			<h4>Live the BlaBlaCar Experience.</h4>

			<div className="row">
				<div className="col-md-3">
					<div className="single_circle">
						<i>
							<GoLocation />
						</i>
						<h5>13 M </h5>
						<h5>passenger</h5>
					</div>
				</div>
				<div className="col-md-3 ">
					<div className="single_circle">
						<i>
							<GoThumbsup />
						</i>
						<h5>13 M </h5>
						<h5>passenger</h5>
					</div>
				</div>
				<div className="col-md-3 ">
					<div className="single_circle">
						<i>
							<GiWorld />
						</i>
						<h5>13 M </h5>
						<h5>passenger</h5>
					</div>
				</div>
				<div className="col-md-3 ">
					<div className="single_circle">
						<i>
							<FiUsers />
						</i>
						<h5>13 M </h5>
						<h5>passenger</h5>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
