import { useRef } from 'react';

export const useMemoCustom = (cb, dependencyArr) => {
  let ref = useRef({ value: null , dependencies: [] });

  
  const hasChanged = dependencyArr.some(
    (dep, index) => dep !== ref.current.dependencies[index]
    );
    
    if (hasChanged || ref.current.dependencies.length === 0) {
      ref.current.value = cb();
      ref.current.dependencies = dependencyArr;
  }

  return ref.current.value;
};
