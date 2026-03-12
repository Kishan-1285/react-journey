import React,{ useState } from 'react'

function MyComponent(){

    const [value, setValue] = useState("");

    

    return(
        <>
            <input
                value={value}
                onChange={(e) => {
                    const next = e.target.value;
                    setValue(next);
                    console.log(next);
                }}
            />
        </>
    );

}

export default MyComponent
