import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from '../reducers'; /* In order to have access to the reducer and state in the reducers file we needed to import Both Of them from the reducers file.*/ 
import { addOne, applyNumber, operationChanger, displayClearer, memoryAdd} from '../actions'; /* need acces to my created actions from the actions folder so they need to get imported into this file from there folder to be able to be used here in this code.  */

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) /* useReducer has to be imported along with react. useReducer always gets [state, dislay]. the reducer function and state is made in the 'reducers' file. */

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  }

  const oppChanger = (operation) => {
    dispatch(operationChanger(operation));
  }

  const displayClear = () => {
    dispatch(displayClearer());
  }

  const addMemory = () => {
    dispatch(memoryAdd())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => addMemory()}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClick(1)}/>
              <CalcButton value={2} onClick={() => handleNumberClick(2)}/>
              <CalcButton value={3} onClick={() => handleNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick(4)}/>
              <CalcButton value={5} onClick={() => handleNumberClick(5)}/>
              <CalcButton value={6} onClick={() => handleNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick(7)}/>
              <CalcButton value={8} onClick={() => handleNumberClick(8)}/>
              <CalcButton value={9} onClick={() => handleNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => oppChanger('+')}/>
              <CalcButton value={"*"} onClick={() => oppChanger('*')}/>
              <CalcButton value={"-"} onClick={() => oppChanger('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => displayClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
