import './CostItem.css'
import CostDate from './CostDate'
import Card from '../../UI/Card'
// import NewCost from './NewCost'

const CostItem = (props) => {

  
    return(
        
        <Card className='cost-item'>
           
           <CostDate date= {props.date} />
            <div className='cost-item__description' >
                <h2>{props.discription}</h2>
                <div className='cost-item__price'>$ {props.amount}</div>
            </div>
        </Card>

    )
}
export default CostItem