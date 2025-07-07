import { useState } from "react";
import "../style.css"

const ToggleBackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [textColor, setTextColor] = useState('#1B1B1B')
    const [buttonStyle, setButtonStyle] = useState("white")

    const handleClick = () => {
        setBackgroundColor(backgroundColor === 'white' ? '#1B1B1B' : 'white')
        setTextColor(textColor === '#1B1B1B' ? '#FFA31A' : '#1B1B1B')
        setButtonStyle(backgroundColor === 'white' ? '#1B1B1B' : 'white')
    }


    return <div style={{backgroundColor, color:textColor}}>
        <button onClick={handleClick} style={{ buttonStyle, color: textColor, border: `2px solid ${textColor}` }}>
            { backgroundColor == '#1B1B1B' ?  'Black Theme' : 'White Theme'}
        </button>

        <section className="content">
            <h1>Welcome To A <br />
            Real World...</h1>
        </section>

    </div>
}

export default ToggleBackgroundColor;