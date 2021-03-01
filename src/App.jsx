import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

function App() {

  /////////////////Increament function by ---------"normal variable"--------//////////////////////////
  var a = 20;
  function increament() {
    a = a + 1;

    console.log(a);
  }
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////Increament function by --------"useState variable"-------///////////////
  const [value, setvalue] = useState(0);
  function setincreament() {
    console.log("111111");
    setvalue(function (prev) {
      return prev + 1;
    })

  }
  ///////////////////////////////////////////////////////////////////////////
  return (<>

    <div>
      Normal variable {a}
    </div>
    <button onClick={increament}>plus</button>

    <br />
    <br />
    <br />
    <div>
      useState variable {value}
    </div>
    <button onClick={setincreament}>plus</button>

  </>);
}

export default App;
