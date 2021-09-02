import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const clickString = props.click || 'Click'; //기본값 설정

  return(
    <button onClick={increment}>
      {clickString} {count}
    </button>
  );
}

export default Counter;