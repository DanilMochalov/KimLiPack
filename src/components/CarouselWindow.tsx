import React, { useState } from 'react'
import './CarouselWindow.scss'

type CarouselWindowProps = {
	imageSrc: string[]
	text?: string
	link?: string
	altText?: string
	customClass?: string // Добавляем возможность кастомного класса
}

const CarouselWindow: React.FC<CarouselWindowProps> = ({
	imageSrc,
	text,
	link,
	altText,
	customClass = '', // Значение по умолчанию
	showControls = true,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	// Переход к следующему изображению
	const handleNext = () => {
		setCurrentImageIndex((prev) => (prev + 1) % imageSrc.length)
	}

	// Переход к предыдущему изображению
	const handlePrev = () => {
		setCurrentImageIndex(
			(prev) => (prev - 1 + imageSrc.length) % imageSrc.length,
		)
	}

	// Обработка нажатий клавиш
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'ArrowRight') {
			handleNext()
		} else if (event.key === 'ArrowLeft') {
			handlePrev()
		}
	}

	return (
		<div
			className={`carousel-window ${customClass}`}
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>
			<img
				src={imageSrc[currentImageIndex]}
				alt={altText || 'carousel image'}
				className="carousel-image"
			/>
			{text && <div className="text">{text}</div>}
			{link && (
				<a
					href={link}
					className="carousel-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					Перейти по ссылке
				</a>
			)}
			{showControls && (
				<div className="controls">
					<button onClick={handlePrev} aria-label="Previous image">
						&lt;
					</button>
					<button onClick={handleNext} aria-label="Next image">
						&gt;
					</button>
				</div>
			)}
		</div>
	)
}

export default CarouselWindow
