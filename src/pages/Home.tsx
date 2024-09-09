import React from 'react'
import './Home.scss'
import CarouselWindow from '../components/CarouselWindow'
import backgroundVideo from "../assets/videos/baza.mp4";

const Home = () => {
	return (
		<div className="HomePage">
			<div className='retro-effect'>
			<div className="greeting">
				<div className='greating_img'>
					<video autoPlay muted loop className="video-background">
						<source src={backgroundVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<h2>Надежность. Доверие. Эффективность.</h2>
					<p>Реализуем идеи в жизнь</p>
				</div>
			</div>
			<div className="about">
				<div className="img"></div>
				<div className="info">
					<h2>О нас</h2>
					<div className="basic_information">
						<div>
							<p>
								Мы предоставляем услуги по подбору и доставке крупногабаритной
								техники и автомобилей из Южной Кореи. Наша цель — обеспечить вас
								качественными продуктами, соответствующими вашим требованиям, с
								профессиональным обслуживанием на каждом этапе.
							</p>
							<ul>
								<div>
								<li>
									<img src="#" alt="icon" /> Качество
								</li>
								<li>
									<img src="#" alt="icon" /> Надежность{' '}
								</li>
								<li>
									<img src="#" alt="icon" />
									Опыт{' '}
								</li>
								</div>
								<div>
								<li>
									<img src="#" alt="icon" /> Команда
								</li>
								<li>
									<img src="#" alt="icon" /> Традиции
								</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="reviews">
				<div className="window_line">
					<CarouselWindow />
					<CarouselWindow />
					<CarouselWindow />
					<CarouselWindow />
				</div>
			</div>

			<div className="buy_car">
				<p>Подобрать машину</p>
				<button className="button_buy">
					В каталог
					<img src="#" alt="arrow" />
				</button>
			</div>
			<div className="blog">
					<div className='news_line'>
					<CarouselWindow />
					<CarouselWindow />
					<CarouselWindow />
					<CarouselWindow />
					</div>
				<button>
					Все статьи <img src="#" alt="arrow" />
				</button>
			</div>
			</div>
		</div>
	)
}

export default Home
