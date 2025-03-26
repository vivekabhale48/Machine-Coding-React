import { lazy, Suspense, useState } from 'react';
export const LazyloadingSection = () => {
  //Its compuslsory that the heavy component should be an default export
  const LazyHeavyComponent = lazy(() => import('./HeavyComponent'));

  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>React Lazy Loading Example</h1>
      <button onClick={() => setShow(true)} className="bg-[#eee] p-1">
        Show
      </button>
      <div>
        {show && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHeavyComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
};
