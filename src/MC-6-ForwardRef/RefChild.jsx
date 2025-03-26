import {forwardRef} from 'react';
//Props paramenter is compulsory to pass even if we dont have any
export const RefChild = forwardRef((props, ref) => {

  return (
    <div>
      <input className="border p-1" ref={ref} placeholder='Type content' type="text" />
    </div>
  )
})