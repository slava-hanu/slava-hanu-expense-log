import "./NewCost.css";
import Card from "../../UI/Card";
import CostForm from "./CostForm";

const NewCost = (props) => {
  

  const formatedCostObject  = (costData) => {
     costData = {id:Math.random().toString(),...costData,
      }
      
     
    props.onSaveData(costData)
    
      
    }

    
    
   


  
  
    

  return (
    <div className="new-cost ">
         <CostForm onFormatedCostObject={formatedCostObject} />
    </div>
 
);
};

export default NewCost;
