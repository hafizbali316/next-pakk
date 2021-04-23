import './SearchCard.css'
import { MdLocationOn } from 'react-icons/md'
import { FaRegCalendarAlt } from 'react-icons/fa'

const SearchCard = () => {
	return (
		<div className="container card">
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<div className="search_filter">
						<span>
							<input type="radio" id="radio1" name="radio" value="radio1" />
							<label for="radio1">&nbsp;&nbsp;Aller Simple</label>
						</span>
						<span>
							<input type="radio" id="radio2" name="radio" value="radio2" />

							<label for="radio2">&nbsp;&nbsp;Aller retour</label>
						</span>
					</div>
				</div>
			</div>

			<div className="row" style={{ padding: '0 15px' }}>
				<div className="col-lg-5 col-sm-12">
					<div className="form">
						<div className="row">
							<div className="col">
								<label className="form-label">de</label>
								<input className="form-control form_input" type="address" placeholder="      Paris" style={{ height: '40px' }} />
								<MdLocationOn className="location1" />
							</div>

							<div className="col">
								<label className="form-label">de</label>
								<input className="form-control form_input" placeholder="       Lyon" style={{ height: '40px' }} />
								<MdLocationOn className="location2" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-12">
					<div>
						<label className="form-label">Depart</label>
						<input className="form-control form_input" type="email" placeholder="       17-April" style={{ height: '40px' }} />
						<FaRegCalendarAlt className="calendor" />
					</div>
				</div>

				<div className="col-lg-4 col-sm-12">
					<div className="form">
						<div classname="row">
							<div className="col ">
								<label className="form-label">Passangers/vedos</label>
								<input className="form-control form_input" type="email" style={{ height: '40px' }} />
							</div>
							<div className="col ">
								<label className="form-label"></label>
								<input
									className="form-control form_input"
									type="button"
									style={{ marginTop: '8px', height: '40px', backgroundColor: '#eb9e34' }}
									value="Search"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchCard
