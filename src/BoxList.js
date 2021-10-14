import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Renders boxes and form
 * 
 * state: array of box info
 * 
 * App -> BoxList -> Box, NewBoxForm
 * 
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function deleteBox(boxId) {
    setBoxes(prevBoxes =>
      prevBoxes.filter((box) => box.id !== boxId)
    );
  }

  function addBox(w, h, color) {
    setBoxes(prevBoxes => [...prevBoxes, { h, w, color, id: uuid() }]);
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(b =>
        <Box w={b.w} h={b.h} color={b.color} key={b.id} id={b.id} deleteBox={deleteBox} />
      )}
    </div>
  )

}

export default BoxList;