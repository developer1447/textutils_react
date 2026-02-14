import React,{useState} from "react"

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!"," success")

  }
    const handleLoClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
     props.showAlert("Converted to LowerCase!"," success")
  }

    const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
     props.showAlert("Clear the text!"," success")


  }
  
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Text to Speech!"," success")

}
  
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
    
  }
  // const {text, setText} = useState('Enter text here 2');
  const [text, setText] = useState('Enter text here 2');

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={speak}>Text to Speech</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary </h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
} 