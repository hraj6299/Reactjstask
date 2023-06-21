
import { useState } from 'react';
import './App.css';

function App() {


  let colours = ["red", "yellow" , "green" , "violet", "orange", "blue"];

  const [render, setRender] = useState(false);
  const [color, setColor] = useState();

  function renderLists()
  {
    setRender(!render);
  }

  function handleClick(event)
  {
    console.log(event.target.id)
    setColor(event.target.id);
  }


  return (
    <div>

      <h1>Colour Picker</h1>

      <button style={{backgroundColor: `${color}` }} onClick={renderLists} >Click Me</button>


      {render && (
        <div>
          <ul>
            {
              colours.map(color => {
                return(
                  <div   onClick= {handleClick} >
                  <li className='box' style={{backgroundColor:`${color}`} } id={color}>{color}</li>
                  {/* <div   className='box' style={{backgroundColor:`${color}`} }> {color} </div> */}
                  
                  </div>
                  
                );
              })
            }

          </ul>

          

        </div>
      )}


      
    </div>
  );
}

export default App;
