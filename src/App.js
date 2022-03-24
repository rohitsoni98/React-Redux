import React, { useState } from "react";
import { NameUpdate, AgeUpdate, ColorUpdate } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {

  const [color, setColor] = useState("");

  const { name, age, input } = useSelector(state => state.changeTheName);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux Name/Age Update</h1>
      <p>Hello I'm <span style={{ color: input }}><b>{name}</b></span></p>
      <p>I'm <span style={{ color: input }}><b>{age}</b></span> years old</p>
      <button onClick={() => dispatch(NameUpdate())}>Update Name</button>
      <button onClick={() => dispatch(AgeUpdate())}>Update Age</button>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="type here"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => dispatch(ColorUpdate(color), setColor(""))} >Update Color</button>
    </div>

  );
}

export default App;
