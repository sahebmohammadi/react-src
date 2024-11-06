import { useCounter } from "../../hooks/useCounter";

export default Counter = () => {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
