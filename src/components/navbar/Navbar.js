import { CgWorkAlt } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import './Navbar.css'

const Header = () => {
	return (
		<>
			<div className="container navbar ">
				<img className="" width="180px" src="/images/logo.png" alt="logo" />

				<div className=" nav_items ">
					<a className="" href="#howm">
						<CgWorkAlt style={{ fontSize: '35px' }} />
						&nbsp;&nbsp;<strong>Home Link1</strong>
					</a>
					<a href="#features">
						<BsSearch style={{ fontSize: '35px' }} />
						&nbsp;&nbsp;<strong>Features add Link2</strong>
					</a>
					<a href="#pricing">
						<AiOutlinePlusCircle style={{ fontSize: '35px' }} />
						&nbsp;&nbsp;<strong>averv Link3</strong>
					</a>

					<span
						style={{ color: '#42a4f5' }}
						className="nav-link dropdown-toggle"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<img
							size="medium-avatar"
							src="/images/avatar.jpg"
							style={{ width: '50px', height: '50px', borderRadius: '100%' }}
							alt="avatar"
						/>
					</span>
				</div>
			</div>
		</>
	)
}

export default Header
