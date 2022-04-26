import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operador, setOperador] = useState(0);

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0){
      setNum(input);
    }else{
      setNum(num + input);
    }
    
  }

  function clear() {
    setNum(0)
  }

  function porcentagem () {
    setNum(num/100)
  }

  function mudarSinal () {
    if (num > 0){
      setNum(-num)
    } else {
      setNum(Math.abs(num));
    }
  }

  function defOperador(e) {
    var operadorInput=e.target.value
    setOperador(operadorInput)
    setOldNum(num)
    setNum(0);
  }

  function calculou () {
    if(operador === "/"){
      setNum(parseFloat(oldNum) / parseFloat(num));
    }else if(operador === "X"){
      setNum(parseFloat(oldNum) * parseFloat(num));
    }else if(operador === "-"){
      setNum(parseFloat(oldNum) - parseFloat(num));
    }else if(operador === "+"){
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div>
      <h1>Gama Calculator</h1>
      <Box m={5}/>
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12}/>
            <h1 className="resultado">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={mudarSinal}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="verde" onClick={defOperador} value="/">/</button>
          <button className="roxo" onClick={inputNum} value={7}>7</button>
          <button className="roxo" onClick={inputNum} value={8}>8</button>
          <button className="roxo" onClick={inputNum} value={9}>9</button>
          <button className="verde " onClick={defOperador} value="X">X</button>
          <button className="roxo" onClick={inputNum} value={4}>4</button>
          <button className="roxo" onClick={inputNum} value={5}>5</button>
          <button className="roxo"  onClick={inputNum} value={6}>6</button>
          <button className="verde" onClick={defOperador} value="-">-</button>
          <button className="roxo" onClick={inputNum} value={1}>1</button>
          <button className="roxo" onClick={inputNum} value={2}>2</button>
          <button className="roxo" onClick={inputNum} value={3}>3</button>
          <button className="verde" onClick={defOperador} value="+">+</button>
          <button className="roxo" onClick={inputNum} value={0}>0</button>
          <button className="roxo" onClick={inputNum} value=".">,</button>
          <button className="roxo" style={{visibility: "hidden"}} >,</button>
          <button onClick={calculou}>=</button>
        </div>
      </Container>
    </div>
  );
}
