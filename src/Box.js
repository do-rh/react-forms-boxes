/** Renders a box with specified dimensions and color
 *  Props: w, h, color, id, deleteBox function
 *  State: none
 */
function Box({ w, h, color, id, deleteBox }) {
  const boxDims = {
    "width": `${w}px`,
    "height": `${h}px`,
    "backgroundColor": color,
  };

  return (
    <div>
      <div className="box" style={boxDims} name={id}>
      </div>
      <button onClick={(evt) => deleteBox(id)}> Delete me!</button>
    </div>
  );

}

export default Box;