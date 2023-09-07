import React from 'react'
import MedicineContext from './MedicineContext';
const MedicineProvider=(props)=>{

    const medicineContext={
        items:[],
        totalCartNumber:0,
        addCart:(item)=>{},
        removeCart:(id)=>{}

    }
    return(
      <MedicineContext.Provider>
        {props.children}
      </MedicineContext.Provider>
    );
}