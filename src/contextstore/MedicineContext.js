import React from 'react'


const MedicineContext= React.createContext({
    items:[],
    totalCartNumber:0,
    addCart:(item)=>{},
    removeCart:(id)=>{}
})

export default MedicineContext
   
