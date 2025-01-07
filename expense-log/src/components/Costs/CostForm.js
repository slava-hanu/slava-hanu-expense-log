import "./CostForm.css";
import Card from "../../UI/Card";
import React, { useState } from "react";

const CostForm = (props) => {
  const [inputDiscription, setInputDiscription] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const inputDiscriptionHandler = (event) => {
    setInputDiscription(event.target.value);
  };

  const inputAmountHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const inputDateHandler = (event) => {
    setInputDate(event.target.value);
  };

  const data = {
    discription: inputDiscription,
    amount: inputAmount,
    date: new Date(inputDate),
  };
  
  const formSubmitHandler = (event) => {
    event.preventDefault(); 
    
       (inputAmount && inputDate && inputDiscription) ? props.onFormatedCostObject(data) : alert('Please enter the correct value!')
       
    setIsFormVisible(false); // Скрываем форму после отправки
    setInputAmount('')
    setInputDate('')
    setInputDiscription('')

  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  return (
    <Card>
      {!isFormVisible && (
        <div className="add-cost">
          <button onClick={toggleFormVisibility}>add cost</button>
        </div>
      )}
      {isFormVisible && (
        <form onSubmit={formSubmitHandler}>
          <div className="new-cost__controls">
            <div className="new-cost__control">
              <label htmlFor="discription">discription</label>
              <input
                type="text"
                id="discription"
                onChange={inputDiscriptionHandler}
                value={inputDiscription}
              />
             
            </div>
            <div className="new-cost__control">
              <label htmlFor="amount">amount</label>
              <input
                type="number"
                id="amount"
                min="0.1"
                step="0.1"
                onChange={inputAmountHandler}
                value={inputAmount}
              />
            </div>
            <div className="new-cost__control">
              <label htmlFor="date">date</label>
              <input
                type="date"
                id="date"
                min="2022-01-01"
                step="1"
                onChange={inputDateHandler}
                value={inputDate}
              />
            </div>
            <div className="new-cost__actions">
              <button type="submit">submit</button>
            </div>
          </div>
        </form>
      )}
    </Card>
  );
};

export default CostForm;
