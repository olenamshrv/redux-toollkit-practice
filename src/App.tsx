import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import { Counter } from './container/counter'

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
// import { incrementByAmount } from './container/counter/slice';
import { CartList } from './container/cart';

import { add } from './container/cart/slice'

const App: React.FC<{}> = () => {
  // const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/>
        {count}

        <button className="button" onClick={()=>dispatch(incrementByAmount({ value: 10}))}>
               +
        </button> */}

        <input placeholder='Add to cart' onBlur={(e)=>dispatch(add({title: e.target.value}))}></input>

        < CartList />
      </header>
    </div>
  );
}

export default App;
