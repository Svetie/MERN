import React, {useState} from 'react';
import styles from './Box.module.css'


const BoxForm = () => {

    const [ color, setColor ] =useState("");

    const [listOfColors, setlistOfColors] = useState([]);


    const changeHandler = (e) =>{
        // console.log("You are changing input ", e.target.name, e.target.value);
        setColor(e.target.value)
        console.log('color is:', color);
    }
    console.log('color is:', color);

    const addBox = (e)=>{
        e.preventDefault();
        setlistOfColors([...listOfColors, color]);
        console.log(listOfColors);
    }

    console.log('list of colors ',listOfColors);

    return (
        <div>
            <form onSubmit={(e)=>addBox(e)}>
                <label htmlFor="">Color:</label>
                <input name="color" onChange={ (e) => changeHandler(e) } type="text" />
                <input type="submit" />
            </form>
            <div className={`${styles.containerBox}`}>
                {
                listOfColors.map((color,i) =>{
                    return <div key={i} className="box" style={{backgroundColor: color, width: "50px", height: "50px"}}>{color}</div>
                } )
                }
            </div>
            
        </div>
    );
};


export default BoxForm;