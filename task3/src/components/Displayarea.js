
import "./Displayarea.css";
function Displayarea(props)
{
    return(
        <div className="displayarea">          
            <p>Input:{props.dispexp}</p>
            <p>Result:{props.dispres}</p>
        </div>

    );

}

export default Displayarea;