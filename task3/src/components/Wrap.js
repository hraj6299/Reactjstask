
import { useState } from "react";
import Buttonbox from "./Buttonbox";
import Displayarea from "./Displayarea";
import "./Wrap.css";
import Prevcal from "./Prevcal";

function Wrap()
{

    const[expression, setExpression] = useState("");

    const[result, setResult] = useState("");

    const[prevexp, setPrevexp] = useState("NONE");

    function obtainExp(expdata)
    {
        setExpression(expression + expdata);   
    }

    function evaluate()
    {
        
        setResult(() => {
            
            
            try {

                return(eval(expression));
                
            } catch (error) {

                return("Invalid Expression")
                
            }
        });


    }

    function handleClear()
    {
        setExpression("");
        setResult("");
        setPrevexp(() => {
            if(prevexp === "NONE")
                return(expression + " = " + result);
            else
            {
                return("NONE")
            }
        })
    }

    function handledel()
    {
        setExpression(() => {
            return(expression.substring(0,expression.length-1));
        })
    }



    return(
        <div className="wrapbox">
            <Prevcal prev={prevexp}></Prevcal>
            <Displayarea dispexp={expression} dispres={result}></Displayarea>
            <Buttonbox exp={expression} 
                        expfun = {obtainExp} 
                        evalfun={evaluate} 
                        clearfun={handleClear} 
                        delfun={handledel} >
            </Buttonbox>
        </div>
    );
}

export default Wrap;