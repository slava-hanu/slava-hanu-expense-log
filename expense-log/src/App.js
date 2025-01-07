

import Costs from "./components/Costs/Costs";
import NewCost from "./components/Costs/NewCost";
import React, {useState} from "react";



let  costs = [
  {
    id:"01",
    date: new Date(2025, 0, 1),
    discription: 'fridge',
    amount: '999,99'
  },
  {
    id:"02",
    date: new Date(2025, 0, 3),
    discription: 'iPhone',
    amount: '700'
  },
  {
    id:"03",
    date: new Date(2025, 0, 5),
    discription: 'bike',
    amount: '400'
  },
]

function App() {
 
  const[addList, setAddList] = useState(costs)

  const saveData = (addData) => {
    setAddList((prevAddList) => [
      ...prevAddList,
      addData
    ]
      

    )
  }
  costs = [...costs, {addList}]

  
  
  return (
    <div>

      <NewCost   onSaveData={saveData}/>
      
      <Costs costs= {addList}   />
    </div>
    
   
    
  )
    
   
  
}

export default App;
