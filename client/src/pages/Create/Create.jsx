import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTemperaments, postDog } from "../../redux/actions";
import "./Create.css";

const Create = () => {
  const dispatch = useDispatch();
  const allTemperament = useSelector((state) => state.temperaments);

  const initialValues = {
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_spanNumberMin: "",
    life_spanNumberMax: "",
    image: null,
    temperament: [],
  };
  const [newForm, setNewForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const validate = (newForm) => {
    let errors = {};
    const matchs = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gim;

    if (newForm.name.length === 0) {
      errors.name = "Name is required";
    } else if (newForm.name.length < 3) {
      errors.name = "Name must have more than 3 characters";
    } else if (!matchs.test(newForm.name)) {
      errors.name = "Invalid name";
    }

    return errors;
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setNewForm({
      ...newForm,
      [property]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_spanNumberMin,
      life_spanNumberMax,
    } = newForm;

    if (
      heightMin > heightMax ||
      weightMin > weightMax ||
      life_spanNumberMin > life_spanNumberMax
    ) {
      return alert(
        "Los valores mínimos no pueden ser mayores que los valores máximos"
      );
    }

    const newHeight = heightMin + " - " + heightMax;
    const newWeight = weightMin + " - " + weightMax;
    const newLifeSpan =
      life_spanNumberMin + " - " + life_spanNumberMax + " years";
    const newValues = {
      ...newForm,
      height: newHeight,
      weight: newWeight,
      life_span: newLifeSpan,
      temperament: newForm.temperament.join(", "),
    };
    dispatch(postDog(newValues));
    setNewForm({ ...initialValues });
  };

  useEffect(() => {
    setErrors(validate(newForm));
  }, [newForm]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <main className="formulario">
      <Link className="back" to="/home">
        Back
      </Link>
      <form className="form-base">
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={newForm.name}
            onChange={handleChange}
            onBlur={() => setShowError(true)}
          ></input>
          <p>{errors.name && showError ? errors.name : "\u00A0"}</p>
        </div>

        <div>
          <label>Height (cm): </label>
          <input
            type="number"
            name="heightMin"
            autoComplete="off"
            min={1}
            max={100}
            value={newForm.heightMin}
            onChange={handleChange}
          ></input>
          to
          <input
            type="number"
            name="heightMax"
            autoComplete="off"
            min={1}
            max={100}
            value={newForm.heightMax}
            onChange={handleChange}
          ></input>
          {newForm.heightMin && newForm.heightMax && (
            <input
              type="hidden"
              name="height"
              value={`${newForm.heightMin}-${newForm.heightMax}`}
            />
          )}
        </div>

        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            name="weightMin"
            autoComplete="off"
            defaultValue={1}
            min={1}
            max={100}
            value={newForm.weightMin}
            onChange={handleChange}
          ></input>
          to
          <input
            type="number"
            name="weightMax"
            autoComplete="off"
            defaultValue={20}
            min={1}
            max={100}
            value={newForm.weightMax}
            onChange={handleChange}
          ></input>
          {newForm.weightMin && newForm.weightMax && (
            <input
              type="hidden"
              name="weight"
              value={`${newForm.weightMin}-${newForm.weightMax}`}
            />
          )}
        </div>

        <div>
          <label>Life span (age): </label>
          <input
            type="number"
            name="life_spanNumberMin"
            autoComplete="off"
            min={1}
            max={100}
            value={newForm.life_spanNumberMin}
            onChange={handleChange}
          ></input>
          to
          <input
            type="number"
            name="life_spanNumberMax"
            autoComplete="off"
            min={1}
            max={100}
            value={newForm.life_spanNumberMax}
            onChange={handleChange}
          ></input>
          {newForm.life_spanNumberMin && newForm.life_spanNumberMax && (
            <input
              type="hidden"
              name="life_span"
              value={`${newForm.life_spanNumberMin}-${newForm.life_spanNumberMax}`}
            />
          )}
        </div>

        <div>
          <label>Temperament: </label>
          <select
            name="temperament"
            value={newForm.temperament}
            onChange={(e) => {
              const value = e.target.value;
              if (!newForm.temperament.includes(value)) {
                setNewForm({
                  ...newForm,
                  temperament: [...newForm.temperament, value],
                });
              } else {
                console.log(newForm);
              }
            }}
            multiple={true}
          >
            <option value="">-- Select a temperament --</option>
            {allTemperament.map((temp, i) => (
              <option key={i} value={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>
          {newForm.temperament && newForm.temperament.length > 0 && (
            <div>
              <ul>
                {newForm.temperament.map((temp, i) => (
                  <li key={i}>
                    {temp}
                    <button
                      type="button"
                      onClick={() => {
                        setNewForm((prevState) => {
                          const newTemperament = [...prevState.temperament];
                          newTemperament.splice(i, 1);
                          return { ...prevState, temperament: newTemperament };
                        });
                      }}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <br></br>
          <button
            className="submit"
            type="submit"
            disabled={Object.keys(errors).length > 0}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export { Create };
