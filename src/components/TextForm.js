import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleclearClick = () => {

        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }


    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style= {{color: props.mode==='dark'?'white':'#0f1d54'}}>

                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'?'#1f2b52':'white', color:props.mode==='dark'?'white':'#0f1d54'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-2" style= {{color: props.mode==='dark'?'white':'#0f1d54'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>



    )
}
