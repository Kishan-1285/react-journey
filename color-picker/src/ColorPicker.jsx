import React,{useState} from 'react';

function ColorPicker(){

    const [color,setColor] = useState("#1e00ff");

    const handleColorPicker = (e)=>{
        setColor(e.target.value)
    }

    return(
        <div className='color-picker'>
            <h1>Color Picker</h1>
            <div className='Picker' style={{backgroundColor : color}}>
                <p>Selected Color:{color}</p>
            </div>

            <label>Select a Color:</label>
            <input
              type="color"
              value={color}
              onChange={handleColorPicker}
            />
        </div>
    );
}

export default ColorPicker