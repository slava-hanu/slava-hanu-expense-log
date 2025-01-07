import "./CostDate.css";

const CostDate = (props) => {
  const date = props.date;

  return (
    <div>
      <div className="weekday ">
        {props.date.toLocaleDateString("en-EN", {
          weekday: "long",
        })}
      </div>
      <div className="control">
        <div>
          {props.date.toLocaleDateString("en-EN", {
            day: "2-digit",
          })}
        </div>
        <div>
          {props.date.toLocaleDateString("en-EN", {
            month: "short",
          })}
        </div>
        <div>
          {props.date.toLocaleDateString("en-EN", {
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default CostDate;
