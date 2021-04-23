import './App.css'
import Carousal from './components/carousal/Carousal'
import Destinations from './components/destinations/Destinations'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/navbar/Navbar'
import SearchCard from './components/searchCard/SearchCard'
import Services from './components/services/Services'
import Tools from './components/tools/Tools'

function App() {
	return (
		<div className="App">
			<div className="">
				<Header />
				<Carousal />
				<SearchCard />

				<Services />

				<Tools />
				<Destinations />

				<Experience />
				<Footer />
			</div>
		</div>
	)
}

export default App
