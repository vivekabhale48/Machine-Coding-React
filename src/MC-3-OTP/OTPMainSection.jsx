import { useRef, useState } from 'react';

export const OTPMainSection = () => {
  const inputRef = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '']);

  function handleInput(value, index, type) {
    const newOtp = [...otp];
    newOtp[index] = value;
    console.log(newOtp);
    setOtp(newOtp);
    // if(isNaN(value.key)) return;
    if (type === 'onchange') {
      if (value.length > 0 && index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }
      console.log(index);
    } else if (value.key === 'Backspace' && index > 0) {
      inputRef.current[index - 1].focus();
    }
  }

  return (
    <div className="flex">
      {Array.from({ length: 4 }, (_, index) => {
        return (
          <input
            key={index}
            onChange={(e) => handleInput(e.target.value, index, 'onchange')}
            onKeyUp={(e) => handleInput(e, index, 'keyup')}
            maxLength="1"
            ref={(ele) => (inputRef.current[index] = ele)}
            className="text-center p-1 border w-10 mr-2 text-[18px]"
            type="text"
          />
        );
      })}
    </div>
  );
};
