import { useState } from 'react'
// import { SliderData} from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function ImageSlider({slides}){
    console.log(slides)
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1)
}

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                console.log(slide)
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                    {index === current && (
                        <img src={slide.image} alt='festival app image' className='image' />
                    )}
                    </div>
                );
            })}
        </section>
    )
}

export default ImageSlider