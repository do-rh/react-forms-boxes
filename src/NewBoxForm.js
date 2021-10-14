import { useState } from "react";

const INITIAL_VALUES = {
  w: "",
  h: "",
  color: ""
};

/** Renders form to create nex box
 *  
 *  Props: addBox function
 *  State: formData
 *  
 *  BoxList -> NewBoxForm
 * 
 */
function NewBoxForm({ addBox }) {

  const [formData, setFormData] = useState(INITIAL_VALUES);

  function handleSumbit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_VALUES);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  //style nicer, put each in a div
  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="widthInput">Width</label>
      <input name="w" id="widthInput" value={formData.w} onChange={handleChange}></input>
      <label htmlFor="heightInput">Height</label>
      <input name="h" id="heightInput" value={formData.h} onChange={handleChange}></input>
      <label htmlFor="colorInput">Color</label>
      <input type="color" name="color" id="colorInput" value={formData.color} onChange={handleChange}></input>
      <button >Add new box!</button>
    </form>
  )
}

export default NewBoxForm;