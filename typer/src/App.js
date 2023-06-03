import React, { useState } from 'react';
import Quote from './Quote';

function TypingSpeedApp() {
  const getquote=async()=>{
    let response=await fetch ("https://type.fit/api/quotes");
    let data=response.json();
    console.log(data);
    
  }
  getquote();

  const text=("Hello World");
  const [input, setInput] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  const [count,setCount]=useState(0);
  const [button,setbutton]=useState('btn btn-dark disabled');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    if(inputValue===text)
    {
      setbutton('btn btn-dark'); 
    }
    else
    {
      setbutton('btn btn-dark disabled');
    }

  };


  //Calculation Of accuracy

  const calc=(event)=>{
    if(event.key==='Backspace'){
      setCount(count+1);
    }
    setAccuracy(100-(Math.round(count/text.length *100)));
  }



  const handleShowResult = () => {
    alert(`Accuracy: ${accuracy}%`);
  };
  

  return (
    <div>

      <Quote/>
      {/* <h1>Typing Speed App</h1>
      <p>{text}</p>
      <input type="text" value={input} onChange={handleInputChange} onKeyDown={calc} />
      <button className={button} onClick={handleShowResult}>Show More Results</button>
      <br></br>
      <sample>You will get the result once you enter the correct input</sample>
      <h4>Your accuracy is : </h4>
      
      
      {input===text && (
        <>
            <span>{accuracy}</span>
            <br></br>
        </>
      )} */}
    </div>
  );
}

export default TypingSpeedApp;