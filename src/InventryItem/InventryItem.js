import React,{Fragment} from 'react'

const InventryItem=(props)=>{
    console.log(props.medicineList)
    return(
        <Fragment>
           {props.medicineList.map(item=> <li key={item.id}>{item.name} {item.description} {item.price} {item.quantity}<button className='add-to-cart'>Add To Cart</button></li>)}
        </Fragment>
    );
}
export default InventryItem