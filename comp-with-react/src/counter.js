import { useState } from "react";

const CounterWrapper = ({ message, initialcount }) => {
  return (
    <div>
      <p>{message}</p>
      <Counter initialcount={initialcount} />
    </div>
  );
};
const Counter = ({ initialcount }) => {
  const [count, setCount] = useState(parseInt(initialcount));

  return (
    <div>
      Hey there! Count is {count}. InitialValue is {initialcount}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default CounterWrapper;
