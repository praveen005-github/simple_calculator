import './App.css';
import React, {  useState } from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "*", "/"];

  const [firstNum, setfirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [oper, setOper] = useState("");
  const [res, setRes] = useState("");



  function clickNum(val) {
    if (oper === "") {
      setfirstNum(firstNum + val);
    } else {
      setSecondNum(secondNum + val);
    }

  }

  function clickOperation(val) {
    setOper(val);
  }

  function solve() {
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
    }
  }
  function display(){
    if(oper === "")
      return firstNum;
    else if(res === "")
      return (firstNum + " "+ oper +" " + secondNum);
    else 
    {
      return (firstNum + " "+oper +" " + secondNum + "="  + res);
    }
  }

  function clear(){
    setOper("");
    setfirstNum("");
    setSecondNum("");
    setRes("");
  }
  function storeRes(){
    setOper("");
    setfirstNum(res);
    setSecondNum("");
    setRes("");
  }

  return (
    <div className='App'>
      <div className="calci">
        <div className="display">{display()}</div>
        <div className="buttons">
          <div className="left">
            <div className='nums'>
              {numbers.map((val, key) => {
                return <div id="num" onClick={() => { clickNum(val) }}>{val}</div>
              })}
            </div>
            <div className='but'>
            <div id="ans" onClick={()=>{solve()}}>Ans</div>
            <div id="clear" onClick={()=>{clear()}}>Clear</div>
            <div id="store" onClick={()=>{storeRes()}}>Store</div>
            </div>
          </div>
          <div className="right">
            {operators.map((val, key) => {
              return <div id="operators" onClick={() => { clickOperation(val) }}>{val}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
