import React, {useState} from 'react'
// state of a form
export default function TextForm(props) {

  // function to convert to upper case
  const convertUppercase = () => {
    console.log("Uppercase button clicked !!" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  // function to convert to lower case
  const convertLowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  // useState is setting default of value of text, and setText method will be used to update text's value
  // here "text" is a state object
  const [text, setText] = useState('Enter text here');
  // text = "new text"   // wrong way of setting the state
  // setText("new text");    // correct way of setting the state
  return (
    <>
      <div className='container'>
          <div className="form-group">
              <label htmlFor="myBox">{props.heading}</label>
              <textarea className="form-control my-2" value={text} id="myBox"  onChange = {handleOnChange} rows="8"></textarea>
          </div>
          <br />
          <button className="btn btn-primary" onClick={convertUppercase}>Convert to Upper case</button>
          <button className="btn btn-success mx-2" onClick={convertLowercase}>Convert to lower case</button>
      </div>
      <br />
      <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>The above text can be read in {0.008 * text.split(" ").length} minutes.</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
