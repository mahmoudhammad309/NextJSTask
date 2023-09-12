import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, set } from '../slices/counterSlice';
import { RootState, AppDispatch } from '../store';

function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <p>Count: {counter.value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(set(0))}>Reset</button>
    </div>
  );
}

export default Counter;