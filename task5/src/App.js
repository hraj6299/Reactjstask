
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  
    const [text, setText] = useState('');

    
    const [wordCount, setWordCount] = useState(0);
  
    
    const [charCount, setCharCount] = useState(0);
  
    const changeHandler = (event) => {
      setText(event.target.value);
    };
  
    useEffect(() => {
      // array of words
      const words = text.split(' ');
  
      // update word count
      let wordCount = 0;
      words.forEach((word) => {
        if (word.trim() !== '') {
          wordCount++;
        }
      });
      setWordCount(wordCount);
  
      // update char count (including whitespaces)
      setCharCount(text.length);
    }, [text]);



  return (
    <div className="box">

      <div>
        <h1>Word counter:</h1>
        <textarea type='textarea' rows='5' cols="50" value={text} onChange={changeHandler} word={wordCount} char={charCount} ></textarea>
            <p>No. of words : {wordCount} </p>
            <p>No. of characters, including whitespaces : {charCount} </p>
        
      </div>
      
    </div>
  );
}

export default App;
