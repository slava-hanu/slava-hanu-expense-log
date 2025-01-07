import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
  const costs = props.costs;
  const [selectedYear, setSelectedYear] = useState("2025");
  const ChangeYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );
  return (
    <div>
      <Card>
        <CostsFilter year={selectedYear} onChangeYear={ChangeYearHandler} />
        {filteredCosts.length === 0 && selectedYear !== "0" ? (
          <h2>В этом году расходов нет!</h2>
        ) : (
          (selectedYear === "0"   ? costs : filteredCosts).map((cost) => (
            <CostItem
              key={Math.random().toString()}
              date={new Date(cost.date)}
              discription={cost.discription}
              amount={cost.amount}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Costs;
