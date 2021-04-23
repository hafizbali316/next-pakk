import './Tools.css'
import { GoLocation } from 'react-icons/go'
import { GrMapLocation } from 'react-icons/gr'
import { FaExchangeAlt } from 'react-icons/fa'

const Tools = () => {
	return (
		<div className="container">
			<h4>Use our tools to improve your experience</h4>
			<div className="row">
				<div className="col-md-4 col-sm-12">
					<div className="tool_container">
						<span>
							<FaExchangeAlt />
						</span>
						<p>Track the progress of your blablabus in real.</p>
						<button className="btn toolBtn">View live updates</button>
					</div>
				</div>

				<div className="col-md-4 col-sm-12">
					<div className="tool_container">
						<span>
							<GoLocation />
						</span>
						<p>Track the progress of your blablabus in real.</p>
						<button className="btn toolBtn">View live updates</button>
					</div>
				</div>

				<div className="col-md-4 col-sm-12">
					<div className="tool_container">
						<span>
							<GrMapLocation />
						</span>
						<p>Track the progress of your blablabus in real.</p>
						<button className="btn toolBtn">View live updates</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tools
