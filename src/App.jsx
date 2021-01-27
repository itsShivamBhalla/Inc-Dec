import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const App =()=>
{
    const [num,setNum]=useState(0);

    const incNum = () =>{
        setNum(num+1);
    }
    const decNum=()=>
    {  
    if(num<=0)
    {
        alert("More Decrement Not possible");
        setNum(0);
    }
    else{
        setNum(num-1);
    }
    }

    return(
        <>
        
        <div className="main_div">
        <div className="center_div">
            <h1>
               {num}
            </h1>
            <div className="btn_div">
                <button onClick={incNum}>
                    <FontAwesomeIcon icon={faPlusSquare} className="icons"/>

                </button>
                <button onClick={decNum}>
                    <FontAwesomeIcon icon={faMinusSquare}className="icons"/>
                </button>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default App;
