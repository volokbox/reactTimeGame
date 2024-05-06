import { useState, useRef } from "react";

export default function Player() {
  const nameValue = useRef();
  const[ name, setName ] = useState('');

  function clickHandler(){
    setName(nameValue.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name  : 'unknown entity'} </h2>
      <p>
        <input type="text" ref={nameValue}/>
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
