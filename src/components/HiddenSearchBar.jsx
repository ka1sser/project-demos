import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../style.css'

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState('white')

    const handleClick = (e) => {
        setBgColor('#1A1A1A')

        if (e.target.className === 'container') {
            setShowInput(false);
            setBgColor('#fff');
        }
    };

    return <section className='container' style={{ backgroundColor: bgColor }} onClick={ handleClick }>
        {showInput ? (
            <input type='text' placeholder='Search...'/>
        ) : (
                <FaSearch onClick={ () => setShowInput(true) } />
        )}
    </section>
}

export default HiddenSearchBar;