import { useMemo, useState } from 'react';
import { useFetch } from './hook/useFetch/useFetch';
import { UseFetchSection } from './hook/useFetch/UseFetchSection';
import { UseMemoCustomSection } from './hook/useMemoCustom/UseMemoCustomSection';
import { UndoSection } from './hook/useUndo/UndoSection';
import { ThrottleSection } from './ThrottleSection';

export const CustomHookSection = () => {
  return (
    <>
      {/* <UseFetchSection /> */}
      {/* <UseMemoCustomSection /> */}
      {/* <UndoSection /> */}
      <ThrottleSection /> 
    </>
  );
};
