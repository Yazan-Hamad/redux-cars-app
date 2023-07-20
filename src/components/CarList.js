import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  
  const {cars, name} = useSelector(({form, cars: {data, searchTerm}})=>{
    const carsList = data.filter((car)=>
       car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: carsList,
        name: form.name
      }

    });

  const onCarDelete = (car)=>{
    dispatch(removeCar(car.id));
  };

  const fetchCars = cars.map((car)=>{
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
