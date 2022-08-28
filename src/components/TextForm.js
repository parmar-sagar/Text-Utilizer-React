import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);

        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);

        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleRemoveExtraSpaceClick = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));

        props.showAlert("Extra spaces are removed!", "success");
    }

    const handleUpChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray' }} value={text} onChange={handleUpChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} charactres</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something into the box to preview here!'}</p>
            </div>
        </>
    )
}
