import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  
  const cars = useSelector((state)=>{
    return state.cars.data;
  });

  const onCarDelete = (car)=>{
    dispatch(removeCar(car.id));
  };

  const fetchCars = cars.map((car)=>{
    return (
      <div key={car.id} className="panel">
        <p>{car.name} - ${car.cost}</p>
        <button 
        className="button is-danger"
        onClick={()=>onCarDelete(car)}
        >
          Delete
        </button>
      </div>
    )
  })

  return (<div className="car-list">
    {
      fetchCars
    }
    <hr/>
  </div>);
}

export default CarList;
