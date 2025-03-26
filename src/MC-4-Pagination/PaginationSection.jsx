import { useEffect, useMemo, useState } from 'react';

export const PaginationSection = () => {
  const [pageData, setPageData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const numberOfPages = useMemo(() => {
    return Math.ceil(pageData.length / 10);
  }, [pageData]);

  function handleButtonChange(index) {
    setActiveIndex(index);
    setStart(index * 10);
    setEnd(index * 10 + 10);
    console.log(start);
    console.log(end);
  }

  function handleNext() {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setStart(newIndex * 10);
      setEnd(newIndex * 10 + 10);
      return newIndex;
    });
  }

  function handlePrev() {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setStart(start - 10);
      setEnd(end - 10);
      return newIndex;
    });
  }

  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const results = await response.json();
    setPageData(results);
  }

  return (
    <div>
      {pageData.slice(start, end).map((ele) => (
        <div key={ele.id}>{ele.title}</div>
      ))}
      <div className="flex">
        <div>
          <button
            disabled={activeIndex === 0 ? true : false}
            onClick={() => handlePrev()}
            className={
              activeIndex === 0
                ? 'p-1 bg-[#333] mr-2 mt-5 opacity-[0.6] cursor-not-allowed'
                : 'p-1 bg-[#333] text-white mr-2 mt-5'
            }
          >
            Prev
          </button>
        </div>
        {Array.from({ length: numberOfPages }, (_, index) => {
          return (
            <button
              key={index}
              onClick={() => handleButtonChange(index)}
              disabled={activeIndex === index ? true : false}
              className={
                activeIndex === index
                  ? 'p-1 text-white bg-[#21c056] mr-2 mt-5'
                  : 'p-1 bg-[#333] text-white mr-2 mt-5'
              }
            >
              {index + 1}
            </button>
          );
        })}
        <div>
          <button
            disabled={activeIndex === numberOfPages - 1 ? true : false}
            onClick={() => handleNext()}
            className={
              activeIndex === numberOfPages - 1
                ? 'p-1 bg-[#333] mr-2 mt-5 opacity-[0.6] cursor-not-allowed'
                : 'p-1 bg-[#333] text-white mr-2 mt-5'
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
