import { useMemo, useState } from 'react';
import { data } from './constant';

export const SearchAndSelectSection = () => {
  const [text, setText] = useState('');
  const [selectedData, setSelectedData] = useState([]);

  const filteredData = useMemo(() => {
    if (!text) return [];
    return data.filter(
      (ele) =>
        ele.toLowerCase().includes(text.toLowerCase()) &&
        !selectedData.includes(ele)
    );
  }, [text, selectedData]);

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleSelect(ele, index1) {
    setSelectedData([...selectedData, ele]);
    setText('');
  }

  function removeEle(ele, index1) {
    let s = selectedData.filter((item, index) => item !== ele);
    setSelectedData(s);
  }
  return (
    <div>
      <div className="border h-[80px] flex items-center p-2">
        {selectedData.length > 0 &&
          selectedData.map((ele, index) => (
            <div
              className="bg-[#000] rounded p-2 text-white text-[12px] mr-2 flex justify-center items-center"
              key={index}
            >
              {ele}
              <div
                onClick={() => removeEle(ele, index)}
                className="ml-2 cursor-pointer bg-[#ccc] font-bold text-[#000] w-[20px] h-[20px] flex justify-center items-center rounded-[50%] p-1"
              >
                X
              </div>
            </div>
          ))}
        <input
          value={text}
          onChange={(e) => handleOnChange(e)}
          className="border w-full rounded-xl px-3 py-2 border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 focus: border-blue-500 outline-none transition duration-300 shadow-sm"
          type="text"
        />
      </div>

      {/* Suggestioon  */}

      {filteredData.length > 0 && (
        <div className="bg-[#eee] p-2 mt-4 h-[300px] overflow-y-scroll shadow rounded-md">
          {filteredData.map((ele, index) => (
            <div
              onClick={() => handleSelect(ele, index)}
              className="p-1 cursor-pointer border border-gray-400 mb-1"
              key={index}
            >
              {ele}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
