
import { useState } from "react";
import "./Button.css";

function Button(props)
{
    const [hover, setHover] = useState(false);

    function handleClick(event)
    {
        
        props.expfun(event.target.value);
    }
    
    function handlemouseEnter()
    {
        setHover(true);
    }

    function handlemouseLeave()
    {
        setHover(false);
    }

    if(props.btnvalue === "/" || props.btnvalue === "*" || props.btnvalue === "-" || props.btnvalue === "+" )
    {
        return(
            <div className="btn">
                <button className="opt" style={{backgroundColor: hover ? 'black' : '#94B49F' , color: hover ? 'white' : 'black'}} 
                onMouseEnter={handlemouseEnter} 
                onMouseLeave={handlemouseLeave} 
                value={props.btnvalue}

                onClick={handleClick}
                

                >{props.btnvalue}</button>
            </div>
        );
    }
    else if(props.btnvalue === "="){
        return(
            <div className="btn">
                <button className="equal" style={{ backgroundColor: hover ? 'black' : '#B52B65' , color: hover ? 'white' : 'black' }} 
                onMouseEnter={handlemouseEnter} 
                onMouseLeave={handlemouseLeave}
                value={props.btnvalue}

                onClick={() => {props.evalfun()}}
        
                >{props.btnvalue}</button>
            </div>
        );   
    }
    else if(props.btnvalue === "C"){
        return(
            <div className="btn">
                <button className="equal" style={{ backgroundColor: hover ? 'black' : '#B52B65' , color: hover ? 'white' : 'black' }} 
                onMouseEnter={handlemouseEnter} 
                onMouseLeave={handlemouseLeave}
                value={props.btnvalue}

                onClick={props.clearfun}
        
                >{props.btnvalue}</button>
            </div>
        );   
    }

    else if(props.btnvalue ===  "←"){
        return(
            <div className="btn">
                <button className="equal" style={{ backgroundColor: hover ? 'black' : '#B52B65' , color: hover ? 'white' : 'black' }} 
                onMouseEnter={handlemouseEnter} 
                onMouseLeave={handlemouseLeave}
                value={props.btnvalue}

                onClick={props.delfun}

        
                >{props.btnvalue}</button>
            </div>
        );   
    }

    else{
        return(
            <div className="btn">
                <button className="button" style={{ backgroundColor: hover ? 'black' : '#DFD3C3' , color: hover ? 'white' : 'black' }} 
                onMouseEnter={handlemouseEnter} 
                onMouseLeave={handlemouseLeave} 
                value={props.btnvalue}

                onClick={handleClick}
                
                >{props.btnvalue}</button>
            </div>
        );

    }
    
}

export default Button;