
import "./Prevcal.css";

function Prevcal(props)
{
    return(
        <div className="prev">
            <p>Previous Calculation: {props.prev}</p>
        </div>
    );
}

export default Prevcal;