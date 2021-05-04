import { useState } from "react";
import "./App.css";

function App() {
  const [expressions, setExpressions] = useState("");
  const [oldExpression, setOldExpressions] = useState("");
  const numerics = new Set("0123456789");
  const oprators = new Set("+-/*");

  let evaluateRes = () => {
    let evaluate = eval(expressions);
    setOldExpressions(expressions);
    setExpressions(String(evaluate));
  }

  let handleKeyUp = function (event) {
    console.log(event.key);
    if (event.key === "Backspace") {
      setExpressions(expressions.slice(0, -1));
    } else if (numerics.has(event.key) || oprators.has(event.key)) {
      setExpressions(expressions + event.key);
    } else if (event.key === "Enter") {
evaluateRes()
    }
  };

  let buttons = ["(",")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  return (
    <div className="App" tabIndex={0} onKeyUp={handleKeyUp}>
      <div
        style={{
          width: "400px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h6>{oldExpression}</h6>
        <h1>{expressions}</h1>
        <h3>narayan</h3>
      </div>
      <div
        style={{
          width: "400px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "20px",
          borderRadius: "10px",
          flexWrap: "wrap",
          borderColor:"#000000",
         
        }}
      >
{buttons.map((buttonvalue)=> {
  return(
    <button style={{
      width: "90px",
      margin: "5px",

    }} onClick={() => {
      if(buttonvalue === "="){
        evaluateRes();

      }
      else if(buttonvalue == "AC"){
        setExpressions(expressions.slice(0, -1));
      }
//       else if(evaluateRes + buttonvalue)
// {

// }
      else{
      setExpressions(expressions + buttonvalue)
    }
    }}>
      {buttonvalue}
    </button>
  )
})}
</div>
    </div>
  );
}

export default App;
