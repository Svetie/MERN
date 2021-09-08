import React from 'react';
import { useParams } from 'react-router';

const Info = () => {
    // destructure the useParams
    const {id , color, width} = useParams();
    return (
        <div>
            {
                // isNaN(id)?
                // <h1>Nice try, {id} is not a number</h1>
                
                // :<h1>Details about a person #{id}</h1>
            }
            { 
                (() => {
                    if(isNaN(id)){
                        return <h1>Nice try, {id} is not a number</h1>
                    } else if(id == 23){
                        return <h1>{id} is {id}</h1>
                    } else {
                        return <h1 style={{color: color, width: `${width}px`}}>Details about a person #{id}</h1>
                    }
                })()
            }
            
        </div>
    );
};


export default Info;