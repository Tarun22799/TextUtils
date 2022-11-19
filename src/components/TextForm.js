import React, {useState} from 'react'
import ProtoTypes from 'prop-types'
export default function TextFrom(props) {
    const [text, setText] = useState("Enter text");
    const handleUpperCase = () => {
        // console.log('uppercase', text);
        var upperCase = text.toUpperCase();
        setText(upperCase);
        console.log(text);
    }
    const handleChnage = (event) => {
        console.log(event.target.value);
        setText(event.target.value)
        // console.log('uppercase');
        // var upperCase = text.toUpperCase();
        // setText("Hello moto", upperCase);
    }
    const lengthOfText = () => {
        var lengthof = text.length;
        console.log(lengthof);
    }
    return (
        <div>
            <div className = "container">
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleChnage} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>
            <div className = "m-5">
            <button className= "btn btn-primary" onClick={handleUpperCase}>Click to Uppercase</button>
            <button className= "btn btn-primary" onClick={lengthOfText}>Click length of text</button>
            </div>
            <div className="container">
                <p>{text.length}</p>
            </div>
        </div>
    )
}

TextFrom.protoTypes = {
    heading: ProtoTypes.string
}

