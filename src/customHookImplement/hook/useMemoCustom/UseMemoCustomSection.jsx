import { useMemo, useState } from 'react';
import { useMemoCustom } from './useMemoCustom';

export const UseMemoCustomSection = () => {
  const [count, setCount] = useState(0);

  const data = useMemoCustom(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      {data}
      {count}
      <button onClick={() => setCount(count + 1)} className="border">
        Count
      </button>
    </div>
  );
};
