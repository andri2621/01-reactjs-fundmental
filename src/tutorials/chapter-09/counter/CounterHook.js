import React, {useState} from 'react';

const CounterHook = ()=>{
  const [count,setCount] = useState(0);

  return <div>
    <p>Counter : {count}</p>
    <button onClick={()=> setCount(count + 1)}>+</button>
    <button onClick={()=> setCount(count - 1)}>-</button>
  </div>
}

export default CounterHook;
