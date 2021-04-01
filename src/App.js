import './App.css';
import React, { useState } from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "*", "/"];

  const [firstNum, setfirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [oper, setOper] = useState("");
  const [res, setRes] = useState("");



  function clickNum(val) {
    let c = 1;
    if (val === undefined) {
      val = 0;
      c = 2;
    }
    if (c === 1) {
      if (oper === "") {
        setfirstNum(firstNum + val);
      } else {
        setSecondNum(secondNum + val);
      }
    } else {
      if (oper === "") {
        setfirstNum(firstNum + val + val);
      } else {
        setSecondNum(secondNum + val + val);
      }
    }
  }

  function backspace(){
    if (oper === "") {
      setfirstNum(firstNum.substr(0,firstNum.length-1));
    } else {
      setSecondNum(secondNum.substr(0,secondNum.length-1));
    }
  }

  function clickOperation(val) {
    setOper(val);
  }

  function solve() {
    // eslint-disable-next-line
    switch (oper) {
      case "+":
        setRes(Number(firstNum) + Number(secondNum));
        break;
      case "-":
        setRes(Number(firstNum) - Number(secondNum));
        break;
      case "*":
        setRes(Number(firstNum) * Number(secondNum));
        break;
      case "/":
        setRes(Number(firstNum) / Number(secondNum));
        break;
      case "^":
        setRes(Number(firstNum) ** Number(secondNum));
    }
  }
  function display() {
    if (oper === "")
      return firstNum;
    else if (res === "")
      return (firstNum + " " + oper + " " + secondNum);
    else {
      return (firstNum + " " + oper + " " + secondNum + " = " + res);
    }
  }

  function clear() {
    setOper("");
    setfirstNum("");
    setSecondNum("");
    setRes("");
  }
  function storeRes() {
    setOper("");
    setfirstNum(res);
    setSecondNum("");
    setRes("");
  }

  return (
    <div className='App'>
      <div className="calci">
        <div className="display"><h2>{display()}</h2></div>
        <div className="buttons">
          <div className="left">
            <div className='nums'>
              {numbers.map((val, key) => {
                return <div id="num" onClick={() => { clickNum(val) }}>{val}</div>
              })}
              <div id="num" onClick={() => { clickNum(0) }}>0</div><div id="num" onClick={() => { clickNum() }}>00</div>
              <div id="operators" onClick={() => { clickOperation("^") }}>^</div>
            </div>
            <div className='other_buttons'>
              <div id="other_btn" onClick={() => { backspace() }}>Backspace</div>
              <div id="other_btn" onClick={() => { clear() }}>Clear</div>
              <div id="other_btn" onClick={() => { storeRes() }}>Store<br/>Answer</div>
            </div>
          </div>
          <div className="right">
            {operators.map((val, key) => {
              return <div id="operators" onClick={() => { clickOperation(val) }}>{val}</div>
            })}
            <div id="equal" onClick={() => { solve() }}>=</div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
