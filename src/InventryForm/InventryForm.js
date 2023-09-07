import React,{Fragment,useState} from 'react';

const InventryForm=(props)=>{
    
    const [isName,setIsName]=useState()
    const [isDescription,setIsDescription]=useState()
    const [isPrice,setIsPrice]=useState()
    const inventrySubmitHandler=(event)=>{
      event.preventDefault();
      const inventryEntries={
           id:Math.random().toString(),
           name:isName,
           description:isDescription,
           price:isPrice,
           quantity:'1'
      }
      props.onEntered(inventryEntries)
     
    }
    const nameChangeHandler=(event)=>{
        setIsName(event.target.value)
    }
    const descriptionChangeHandler=(event)=>{
        setIsDescription(event.target.value)
    }
    const priceChangeHandler=(event)=>{
        setIsPrice(event.target.value)
    }
    //console.log(isAddInventry)
    return(
     <Fragment>
       <form className='inventry-form' onSubmit={inventrySubmitHandler}>
         <label> Medicine Name </label>
         <input className='medicine-input' type='text' name='medicine' onChange={nameChangeHandler}/>
         <label> Description </label>
         <input className='description-input' type='text' name='description' onChange={descriptionChangeHandler}/>
         <label> Price </label>
         <input className='price-input' type='number' name='price' onChange={priceChangeHandler}/>
         <button className='add-inventry'>Add</button>
      </form>
     </Fragment>
    );
}

export default InventryForm
