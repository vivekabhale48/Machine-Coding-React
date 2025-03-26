import { useState } from 'react';

export const SeatBooking = () => {
  const [count, setCount] = useState(0);
  const [updateIndex2, setUpdateIndex2] = useState(null);
  const [updateIndex1, setUpdateIndex1] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState([]);

  let a = [{ row: 5, column: 4 }];

  function handleClick(index1, index2, seatNumber) {
    setUpdateIndex1(index1);
    setUpdateIndex2(index2);
    if (selectedSeat.indexOf(seatNumber) !== -1) {
      let upDateSeat = selectedSeat.filter((ele) => ele !== seatNumber);
      setSelectedSeat(upDateSeat);
      return;
    }
    setSelectedSeat((prev) => [...prev, seatNumber]);
    console.log(index1, index2);
  }

  return (
    <div>
      {a.map((ele) =>
        Array.from({ length: ele.row }, (_, index1) => {
          return (
            <div className="flex">
              {Array.from({ length: ele.column }, (_, index2) => {
                const seatNumber = index1 * ele.column + index2 + 1;
                return (
                  <button
                    key={index2}
                    onClick={() => handleClick(index1, index2, seatNumber)}
                    className={
                      selectedSeat.indexOf(seatNumber) !== -1
                        ? 'p-2 bg-[#FF0000] m-2 w-[50px] h-[50px]'
                        : 'p-2 bg-[#ccc] m-2 w-[50px] h-[50px]'
                    }
                  >
                    {seatNumber}
                  </button>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

//10 => index1 * 5 + index2
