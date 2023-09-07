
import './App.css';
import React,{Fragment,useState} from 'react'
import InventryForm from './InventryForm/InventryForm';
import InventryList from './InventryList/InventryList';
const medicalInventry=[]
function App() {
  const [addMedicine,isAddMedicine]=useState(medicalInventry)
   const addInventry=(item)=>{
    
    isAddMedicine((oldObj)=>{
      return [item,...oldObj]
    })
   }
   
  return (
    <Fragment>
      <header>
        <InventryForm onEntered={addInventry} />
      </header>
      <main>
       <InventryList medicineList={addMedicine}/>
      </main>
    </Fragment>
  );
}

export default App;
