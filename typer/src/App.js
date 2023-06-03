import React, { useState } from 'react';

function TypingSpeedApp() {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog.');
  const [input, setInput] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  const [count,setCount]=useState(1);


  const handleInputChange = (event) => {

    
    const inputValue = event.target.value;
    setInput(inputValue);

    

   
  };

  const calc=(event)=>{
    if(event.key==='Backspace'){
      setCount(count+1);
    }
    // Calculate accuracy
    console.log(count);
    setAccuracy(100-(count/text.length *100));

  }

  const handleShowResult = () => {
    alert(`Accuracy: ${accuracy}%`);
  };

  return (
    <div>
      <h1>Typing Speed App</h1>
      <p>{text}</p>
      <input type="text" value={input} onChange={handleInputChange} onKeyDown={calc} />
      <button onClick={handleShowResult}>Show Result</button>
    </div>
  );
}

export default TypingSpeedApp;