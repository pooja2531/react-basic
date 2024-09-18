import { useState } from "react";

function App() {
  let [counter ,setCounter] = useState(1)
  function addHandler(){
    if(counter < 20){
      setCounter(counter + 1)
    }
   
  }
  function removeHandler(){
    if(counter > 0){
      setCounter(counter - 1)
    }
   
  }
  return (
    <div>
      <button onClick={addHandler}>Add</button>
      <div className="App">
        counter = {counter}
      </div>
      <button onClick={removeHandler}>Remove</button>
    </div>

  );
}

export default App;
