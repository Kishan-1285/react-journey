import React ,{useState} from 'react';

function MyComponent(){


    const [name,setName] = useState("");
    const [Quantity,setQuantity] =  useState(1);
    const [Comment,setComment] = useState("");
    const [Payment,setPayment] = useState("");
    const [Shipping,setShipping] = useState("");

    const handleChange =(e)=>{
        setName(e.target.value);
    };
    const handleTypeChange =(e) =>{
        setQuantity(e.target.value);
    }
    const handleCommentChange =(e)=>{
        setComment(e.target.value);
    }
    const handlePaymentChange =(e)=>{
        setPayment(e.target.value);
    }
    const handleShippingChange=(e)=>{
        setShipping(e.target.value);
    }

    
    return(

        <>
          <input placeholder='Enter your name' value={name} onChange={handleChange}/>
          <p>Name : {name}</p>

          <input value={Quantity} type="number" onChange={handleTypeChange}/>
          <p>Quantity : {Quantity}</p>

          <textarea type="number" placeholder='Enter your comment' onChange={handleCommentChange}/>
          <p>Comments : {Comment}</p>

          <select value={Payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Master Card</option>
            <option value="giftcard">Gift Card</option>

          </select>
          <p>Payment Method : {Payment}</p>

          <label>
            <input type="radio" value="Pick Up"
                   checked={Shipping==="Pick Up"}
                   onChange={handleShippingChange}/>
            Pick Up
          </label><br/>
          <label>
            <input type="radio" value="Delivery"
                   checked={Shipping==="Delivery"}
                   onChange={handleShippingChange}/>
            Delivery
          </label>
        </>

    );
}

export default MyComponent