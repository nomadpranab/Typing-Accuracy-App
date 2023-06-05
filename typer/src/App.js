import React, { useState, useEffect } from "react";
import './Style.css';

function TypingSpeedApp() {
  const [text, settext] = useState("");
  const [input, setInput] = useState("");
  const [accuracy, setAccuracy] = useState(0);
  const [count, setCount] = useState(0);


  //generating random quotes by API
  useEffect(() => {
    const sentence = async () => {
      let response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      let index = Math.floor(Math.random() * 1000);
      settext(data[index].text);
    };
    sentence();
  }, []);

  

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  //Calculation Of accuracy

  const calc = (event) => {
    if (event.key === "Backspace") {
      setCount(count + 1);
    }
    setAccuracy(100 - Math.round((count / text.length) * 100));
  };

  

  return (
    <div id="body" className="text-center">
      <h1 className="text-center p-3 mt-3" style={{color:"#F6F1F1"}}> Hey Coder ! </h1>
      <h5 className="text-center " style={{color:"#F6F1F1"}}> Check your typing accuracy</h5>

      <div className="card mb-4 mt-5 m-auto" id="card"style={{width:"16rem",backgroundColor:"#F6F1F1"}}>
        <div className="card-body pb-3">
          <h5 className="card-title">Hi!</h5>
          <h6 className="card-subtitle mb-2 text-muted">Quote of the day</h6>
          <p className="card-text">
            {text}
          </p>
        </div>
      </div>

      <div>
        <h6 className="mt-3" style={{color:"#F6F1F1"}}>Repeat the same below to test your typing skills</h6>
      </div>

      <div>
      <textarea className="mt-3 mb-3 p-3" style={{backgroundColor:"#F6F1F1",border:`5px solid #FCCA6F`,borderRadius:"0.4rem"}}
      rows="4" cols="60" 
        type="text"
        placeholder="type here"
        value={input}
        onChange={handleInputChange}
        onKeyDown={calc}
      />
      </div>
      <div style={{color:"#FEFF86"}}>You will get the result once you enter the correct input</div>
     
      
      <h4 className="p-3" style={{color:"#F6F1F1"}}>Your accuracy is : </h4>

      {input === text && (
        <>
          <h2 style={{color:"#FEFF86"}}>{accuracy}%</h2>
          <br></br>
        </>
      )}
    </div>
  );
}

export default TypingSpeedApp;
