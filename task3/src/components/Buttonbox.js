import Button from "./Button";
import "./Buttonbox.css";


function Buttonbox(props)
{
    const values = ["C","←", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "00", ".", "="];
    
    return(
        <div className="buttonbox">
            {
                values.map(value =>{
                    return(
                        <Button btnvalue={value} class="button" 
                        
                        exp = {props.exp} 
                        expfun={props.expfun} 
                        evalfun={props.evalfun} 
                        clearfun={props.clearfun} 
                        delfun={props.delfun} >

                        </Button>
                    );
                })
            }

        </div>
    );
}

export default Buttonbox;