import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector}from "react-redux"
import{bindActionCreators}from'redux'
import { actionCreators, state } from './State';
function App() {
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney,bankrupt}=bindActionCreators(actionCreators, dispatch);
  const amount= useSelector((state:state)=>state.bank)
  return (
    <div className="App">
     <h1>{amount}</h1>
     <button onClick={()=>depositMoney(1000)}>Deposit</button>
     <button onClick={( )=>withdrawMoney(500)}>withdraw</button>
     <button onClick={()=>bankrupt()}>bankrupt</button>
    </div>
  );
}

export default App;
