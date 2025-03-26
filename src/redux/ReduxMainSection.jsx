import { useDispatch, useSelector } from 'react-redux';
import {
  decrementState,
  fetchData,
  incrementState,
  setInputName,
} from './counterSlice';
import { useEffect } from 'react';

export const ReduxMainSection = () => {
  const count = useSelector((state) => state.counter.count);
  const { data, loading, error } = useSelector((state) => state.counter);
  const inputName = useSelector((state) => state.counter.inputName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(incrementState())}
          className="bg-[#eee] p-1"
        >
          Increment
        </button>
      </div>
      {count}
      <div>
        <button
          onClick={() => dispatch(decrementState())}
          className="bg-[#eee] p-1"
        >
          Decrement
        </button>
      </div>

      <input
        onChange={(e) => dispatch(setInputName(e.target.value))}
        className="border mt-5 mb-5"
        value={inputName}
        type="text"
      />
      {inputName}

      <div>
        {data.length > 0 &&
          data.map((ele) => <div key={ele.id}>{ele.title}</div>)}
      </div>
    </div>
  );
};
