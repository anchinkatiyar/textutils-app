import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("AUppercased");
    setText(text.toUpperCase());
    props.show("Text Set To Uppercase",'success')

    //right way to change the variable in react state
  };
  const handleLowClick =  () =>{
    setText(text.toLowerCase());
    props.show("Text Set To lowerase",'success')
  }
  const handleClearText = ()=>{
    setText('')
    props.show("Text is cleared",'success')
  }
  const handleReverseText = ()=>{
    let newText='';
    for (let i=text.length-1;i>=0;i--){
      newText = newText + text[i]
    }
    setText(newText)
    props.show("Text is now reversed",'success')
  }
  const handleSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.show("All the extra spaces are cleared",'success')
  }
  const handleEmail = ()=>{
    console.log("here's your mail bud")
    let a = [];
    let re =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    for (let word of text.split(" ")){
      if (word[0] === '"' & word[word.length-1]==='"'){
        word = word.slice(1,word.length-1);
      }
      
      if (re.test(word)){
        a.push(word);
      }
    }
    if (a.length > 0){
      let outro = "here is the list of extracted emails : " 
      setText(outro +a.join('  '));
    }else{
      setText('no mail id found')
    }
    props.show("All the emails are extracted",'success')
  }
  const handleCopy = () =>{
    let txt = document.getElementById('myBox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.show("Text Copied to clipboard",'success')
  }
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };

  // text = 'new text'// wrong way to change the variable value in state
  const countChar =(t)=>{
    let count=0
    for(let i=0;i<t.length;i++){
      if (t[i] !== " "){
        count = count+1
      }
    }
    return count
  }
  //counting words using for loop below i did using regex here without using regex
  // const wordCount = (t)=>{
  //   let count=0
  //   space = false
  //   for(let i=0;i<t.length;i++){
  //     if (t[i] !== " " && !space){
  //       count = count+1
  //       space=true
  //     }else if( t[i]===" "){
  //       space=false
  //     }
  //   }
  //   return count
  // }
  return (
    <>
      <div className="container">
        <h3 className="my-3">{props.heading}</h3>
        <div className="mb-3">
          <textarea className={`form-control bg-${props.mode}  text-${props.mode==='light'?'dark':'light'}`}id="myBox"rows="8" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleClearText}>
          Clear Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleReverseText}>
          Reverse Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleEmail}>Extract Email</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
          <h1>Yout Text Summary</h1>
          <p>words : {text.trim(' ').split(/\s+/)[0] ===''  ?0:text.trim(' ').split(/\s+/).length}, characters : {countChar(text)}</p>
          <p>Average Time to read the sentence in : {text.trim(' ').split(/\s+/)[0] ==='' ?0:text.trim(' ').split(/\s+/).length*0.008} minutes</p>
          <h2>Preview</h2>
          <p>{text.length >0 ? text : 'Enter Something to Preview Here'}</p>
      </div>
    </>
  );
}
TextForm.propTypes = { heading: PropTypes.string.isRequired };
