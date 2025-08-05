import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h2>Count:{count}</h2>
        <button className='bg-red-600' onClick={()=>setCount(count + 1)}>increase</button>
        <button className='bg-blue-600' onClick={()=>setCount(count - 1)}>decrease</button>
        <button className='bg-purple-600' onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}

export default Counter