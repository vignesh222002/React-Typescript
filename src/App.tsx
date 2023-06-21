import React from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './Components/Event';
import StateTypeAssertion from './Components/StateTypeAssertion';
import ReducerCounter from './Components/ReducerCounter';
import ComponentPropPage from './Components/componentProp/ComponentPropPage';
import Profile from './Components/componentProp/Profile';
import RandomNumber from './Components/restrictingProp/RandomNumber';

function App() {
  return (
    <div className="App">
      {/* <Event handler={(event) => console.log(1)} /> */}
      {/* <StateTypeAssertion /> */}
      {/* <ReducerCounter /> */}
      {/* <ComponentPropPage isLogged={true} Component={Profile} /> */}
      {/* <RandomNumber value={0} isZero /> */}
    </div>
  );
}

export default App;
