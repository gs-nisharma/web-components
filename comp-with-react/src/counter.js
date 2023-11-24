import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hey there! Count is {count}.{" "}
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};
export default Counter;
