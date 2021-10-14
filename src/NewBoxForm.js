import { useState } from "react";

function NewBoxForm({ addBox }) {
  const INITIAL_INPUTS = {
    w: "",
    h: "",
    color: ""
  }

  const [formData, setFormData] = useState(INITIAL_INPUTS);

  function handleSumbit(evt) {
    evt.preventDefault();
    addBox(formData.w, formData.h, formData.color);
    setFormData(INITIAL_INPUTS);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="w">Width</label>
      <input name="w" id="widthInput" value={formData.w} onChange={handleChange}></input>
      <label htmlFor="h">Height</label>
      <input name="h" id="heightInput" value={formData.h} onChange={handleChange}></input>
      <label htmlFor="color">Color</label>
      <input name="color" id="colorInput" value={formData.color} onChange={handleChange}></input>
      <button >Add new box!</button>
    </form>
  )
}

export default NewBoxForm;