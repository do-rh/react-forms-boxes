/** Renders a box with specified dimensions and color
 * 
 *  Props: w, h, color, id, deleteBox function
 *  State: none
 * 
 *  BoxList -> Box
 */
function Box({ w, h, color, id, deleteBox }) {
  const boxStyle = {
    "width": `${w}px`,
    "height": `${h}px`,
    "backgroundColor": color,
  };

  function handleRemove() {
    deleteBox(id);
  }

  return (
    <div>
      <div className="box" style={boxStyle}>
      </div>
      <button onClick={handleRemove}> Delete me!</button>
    </div>
  );

}

export default Box;