import React from 'react';
// useDispatch is used for dispatching an action
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions'
import { decrement } from './actions'
import { logState } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
       {isLogged
       ? <button onClick={() => dispatch(logState())}>Logout</button>
       : <button onClick={() => dispatch(logState())}>Login</button>
       }
       <h1>Redux functionality using React-Redux</h1>
       <h2>Counter : {counter}</h2>
       <button onClick={() => dispatch(increment())}>+</button>
       <button onClick={() => dispatch(decrement())}>-</button>

       {isLogged
        ? <a href="https://www.youtube.com/watch?v=MVvXUinj1R8">Watch this</a>
        : <h3>For finding the meaning of life, please login</h3>
        }
       
    </div>
  );
}

export default App;
