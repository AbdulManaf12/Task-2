import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(10);
  const [id, setId] = useState();
  useEffect(() => {
    let i = setInterval(() => {
      setCount(9);
    }, 100);
    setId(i);
  }, []);

  useEffect(() => {
    if (count == 0) {
      clearInterval(id);
    
    } else {
      setCount(count - 1);
      console.log(count);
    }
  }, [count]);
  return <div>{count == 0 ? <p>Count: {count}</p> : <p>Times up</p>}</div>;
}
