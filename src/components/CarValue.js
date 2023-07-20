import { useSelector } from "react-redux";

function CarValue() {
  const totlCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((cost, car) => cost + car.cost, 0)
  );

  return <div className="car-value">Total Cost: ${totlCost}</div>;
}

export default CarValue;
