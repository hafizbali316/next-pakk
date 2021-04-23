import { Carousel } from 'react-bootstrap'

const Carousal = () => {
	return (
		<Carousel fade>
			<Carousel.Item intervel={100}>
				<img width="100%" height="350px" src="/images/blablacar-header.jpg" alt="Second slide" style={{ objectFit: 'fill' }} />
			</Carousel.Item>

			<Carousel.Item intervel={100}>
				<img width="100%" height="350px" src="/images/3.jpg" alt="Second slide" style={{ objectFit: 'fill' }} />
			</Carousel.Item>
			<Carousel.Item intervel={100}>
				<img width="100%" height="350px" src="/images/4.jpg" alt="Second slide" style={{ objectFit: 'fill' }} />
			</Carousel.Item>
		</Carousel>
	)
}

export default Carousal
