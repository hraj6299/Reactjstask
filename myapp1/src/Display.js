import './App.css';

function Display(props)
{
    
    return(
        <div className='display'> 
            <p>Your age is : {props.disp}</p>
        </div>
    );
}

export default Display;