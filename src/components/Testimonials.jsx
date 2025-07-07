import { useState } from 'react';
import '../style.css'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "This is the best product I have ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "Bogus seller! Scammer to mga tsong!",
            author: "Porman"
        },
        {
            quote: "This product has completely changed my life!",
            author: "John Bobson"
        }
    ]

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
    }

    const handleNextClick = () => {
        setCurrentIndex((currentIndex +1) % testimonials.length)
    }

    return (
        <div className='testimonials'>
            <div className='testimonials-quote'>
                {testimonials[currentIndex].quote}
            </div>
            <div className='testimonials-author'>
                - {testimonials[currentIndex].author}
            </div>
            <div className='testimonials-nav'>
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};

export default Testimonials;