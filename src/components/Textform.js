import React,{useState} from 'react'

export default function Textform(props) {
  const  uppclick = ()=>{
    console.log("upper click button is clicked"+text)
    const newtext=text.toUpperCase();
    setText(newtext)
    props.showalert("convert to upper case","success")
  }
  const  lowerclick = ()=>{
    console.log("upper click button is clicked"+text)
    const newtext=text.toLowerCase();
    setText(newtext)
    props.showalert("convert to lower case","success")
  }
  const  clearclick = ()=>{
    console.log("upper click button is clicked"+text)
    const newtext="";
    setText(newtext)
    props.showalert("text clear","success")
  }
  const  speakclick = ()=>{
   let msg = new SpeechSynthesisUtterance();
   msg.text=text;
   window.SpeechSynthesis.speak(msg);
   props.showalert("Text arranged","success")
  }
  const  reverseclick = ()=>{
    const newtext = text.split("").reverse().join("")
    setText(newtext);
    props.showalert("Text reversed","success")
   }
   const  copyclick = ()=>{
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showalert("Copied","success")
   }

   const spaceclick = () =>{
    let newtext = text.split(/[  ]+/)
    setText(newtext.join(" "))
    props.showalert("Text arranged","success")
   }
  const  handleonchange = (event)=>{
    console.log("on change")
    setText(event.target.value)
   
  }
   const [text , setText] = useState("")
  //  text = 'new text'  it is a wrong way to change the state
    // setText("new text");  //it is  right way to change text /
  return (
   <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
   
      <h1>{props.heading}</h1>
  
    <div className="mb-3">
  <textarea className="form-control" value={text} placeholder='Enter the value' style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}  onChange={handleonchange} id="mybox" rows="8"></textarea>
  <button className='btn btn-primary my-3' onClick={uppclick} >convert to upper case</button>
  <button className='btn btn-primary my-3 mx-2' onClick={lowerclick} >convert to lower case</button>
  <button className='btn btn-primary my-3 mx-2' onClick={clearclick} >clear text</button>
  <button className='btn btn-primary my-3 mx-2' onClick={speakclick} >speak</button>
  <button className='btn btn-primary my-3 mx-2' onClick={reverseclick} >reverse</button>
  <button className='btn btn-primary my-3 mx-2' onClick={copyclick} >copy</button>
  <button className='btn btn-primary my-3 mx-2' onClick={spaceclick} >remove extra space</button>
    </div>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length}characters </p>
    <p><b>{0.008 *text.split(" ").length } minutes will take to read this text area</b></p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to Preview"}</p>


    </div>
    </>
  )
}
//  Textform;