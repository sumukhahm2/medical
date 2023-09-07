import React,{Fragment} from 'react'
import './InventryList.css'
import InventryItem from '../InventryItem/InventryItem';
const InventryList=(props)=>{
    return(
       <Fragment>
         <div className='inventry-list'>
            <h3>Medicine Name</h3>
            <h3>Description</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
         </div>
         <div>
                <ul><InventryItem medicineList={props.medicineList}/></ul>
        </div>
       </Fragment>
    );
}

export default InventryList