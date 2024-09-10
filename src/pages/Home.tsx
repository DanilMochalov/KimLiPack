import React from 'react'
import './Home.scss'
import CarouselWindow from '../components/CarouselWindow'
import backgroundVideo from '../assets/videos/lolka.mp4'
import Slider from 'react-slick'

const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
	}

	return (
		<div className="HomePage">
			<div className="retro-effect">
				<div className="greeting">
					<div className="greating_img">
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
									техники и автомобилей из Южной Кореи. Наша цель — обеспечить
									вас качественными продуктами, соответствующими вашим
									требованиям, с профессиональным обслуживанием на каждом этапе.
								</p>
								<ul>
									<div>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="icon icon-tabler icons-tabler-outline icon-tabler-antenna-bars-5"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M6 18l0 -3" />
												<path d="M10 18l0 -6" />
												<path d="M14 18l0 -9" />
												<path d="M18 18l0 -12" />
											</svg>{' '}
											Качество
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="icon icon-tabler icons-tabler-outline icon-tabler-settings"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
												<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
											</svg>{' '}
											Надежность{' '}
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="icon icon-tabler icons-tabler-outline icon-tabler-stairs"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M22 5h-5v5h-5v5h-5v5h-5" />
											</svg>
											Опыт{' '}
										</li>
									</div>
									<div>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
												<path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
												<path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
												<path d="M17 10h2a2 2 0 0 1 2 2v1" />
												<path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
												<path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
											</svg>{' '}
											Команда
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="icon icon-tabler icons-tabler-outline icon-tabler-building-pavilion"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />
												<path d="M6 21l0 -9" />
												<path d="M18 21l0 -9" />
												<path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" />
											</svg>{' '}
											Традиции
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="icon icon-tabler icons-tabler-outline icon-tabler-messages"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
												<path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
											</svg>{' '}
											Открытось
										</li>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<section className="reviews">
					<Slider {...settings}>
						<CarouselWindow
							customClass="carousel-homepage-reviews"
							showControls={false}
							imageSrc={['../assets/img/1.png', '../assets/img/2.jpg']}
							text="Отзыв 1"
						/>
						<CarouselWindow
							customClass="carousel-homepage-reviews"
							showControls={false}
							imageSrc={['../assets/img/2.jpg', '../assets/img/1.png']}
							text="Отзыв 2"
						/>
						<CarouselWindow
							customClass="carousel-homepage-reviews"
							showControls={false}
							imageSrc={['img3.jpg', 'img4.jpg']}
							text="Отзыв 3"
						/>
						<CarouselWindow
							customClass="carousel-homepage-reviews"
							showControls={false}
							imageSrc={['img3.jpg', 'img4.jpg']}
							text="Отзыв 4"
						/>
						<CarouselWindow
							customClass="carousel-homepage-reviews"
							showControls={false}
							imageSrc={['img3.jpg', 'img4.jpg']}
							text="Отзыв 5"
						/>
					</Slider>
				</section>

				<div className="buy_car">
					<p>Подобрать машину</p>
					<button className="button_buy">
						В каталог
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M5 12l14 0" />
							<path d="M13 18l6 -6" />
							<path d="M13 6l6 6" />
						</svg>
					</button>
				</div>
				<section className="blog">
					<p>Блог</p>
					<div className="sliderbar">
						<Slider {...settings}>
							<CarouselWindow
								customClass="carousel-homepage-blog"
								showControls={false}
								imageSrc={['img1.jpg']}
								text="Блог 1"
								link="/blog/1"
							/>
							<CarouselWindow
								customClass="carousel-homepage-blog"
								showControls={false}
								imageSrc={['img2.jpg']}
								text="Блог 2"
								link="/blog/2"
							/>
							<CarouselWindow
								customClass="carousel-homepage-blog"
								showControls={false}
								imageSrc={['img2.jpg']}
								text="Блог 3"
								link="/blog/2"
							/>
							<CarouselWindow
								customClass="carousel-homepage-blog"
								showControls={false}
								imageSrc={['img2.jpg']}
								text="Блог 4"
								link="/blog/2"
							/>
							<CarouselWindow
								customClass="carousel-homepage-blog"
								showControls={false}
								imageSrc={['img2.jpg']}
								text="Блог 5"
								link="/blog/2"
							/>
							<CarouselWindow
								customClass="carousel-homepage-blog"
								showControls={false}
								imageSrc={['img2.jpg']}
								text="Блог 6"
								link="/blog/2"
							/>
						</Slider>
					</div>
					<button className="button_link">
						Почитать
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M5 12l14 0" />
							<path d="M13 18l6 -6" />
							<path d="M13 6l6 6" />
						</svg>
					</button>
				</section>
			</div>
		</div>
	)
}

export default Home
