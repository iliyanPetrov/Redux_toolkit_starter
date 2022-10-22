import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { 
    increment,
    decrement,
    resetCount,
    incrementByAmount,
    decrementByAmount } from "../app/redux/counterSlice"

function Counter() {

  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  const [incr, setIncr] = useState(0);
  const addValue = Number(incr) || 0 ;
  const resetAllValues = () => {
    setIncr(0);
    dispatch(resetCount())
  }

  return (
    <section>
        <div><p>{` ${count} `}</p></div>
        <div>
            <button onClick={() => dispatch(decrement())} > - </button>
            <button onClick={() => dispatch(increment())} > + </button>
        </div>
        <div>
            <input 
            type="text"
            value={`${incr}`}
            placeholder='enter a number..'
            onChange={(e) => setIncr(e.target.value)} />
        </div>
        <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))} >Increase by amount</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrementByAmount(addValue))}>Decrease by amount</button>
        </div>
        <div>
            <button onClick={resetAllValues}>Reset to zero</button>
        </div>
    </section>
  )
}

export default Counter