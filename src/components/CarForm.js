import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector(({ form }) => {
    return { name: form.name, cost: form.cost };
  });

  const onNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const onCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({
      name,
      cost
    }))
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={onFormSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={onNameChange}
            />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ''}
              onChange={onCostChange}
            />
          </div>
        </div>
        <div className="field">
        <button className="button is-link">Add</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
