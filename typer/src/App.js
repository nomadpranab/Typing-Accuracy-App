import React, { useState } from 'react';

function TypingSpeedApp() {
  const text=('The quick brown fox jumps over the lazy dog.');
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
      <h1>Typing Speed App</h1>
      <p>{text}</p>
      <input type="text" value={input} onChange={handleInputChange} onKeyDown={calc} />
      <button className={button} onClick={handleShowResult}>Show Result</button>
      <h4>Your accuracy is : {accuracy}</h4>
    </div>
  );
}

export default TypingSpeedApp;