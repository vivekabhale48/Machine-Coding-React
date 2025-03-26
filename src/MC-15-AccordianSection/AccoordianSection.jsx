import { useState } from 'react';

export const AccordianSection = () => {
  const [index, setIndex] = useState([]);
  const [newSet, setNewSet] = useState(new Set());

  const accordionData = [
    {
      id: 1,
      title: 'Accordion 1',
      content: 'This is the content for accordion 1.',
    },
    {
      id: 2,
      title: 'Accordion 2',
      content: 'This is the content for accordion 2.',
    },
    {
      id: 3,
      title: 'Accordion 3',
      content: 'This is the content for accordion 3.',
    },
    {
      id: 4,
      title: 'Accordion 4',
      content: 'This is the content for accordion 4.',
    },
  ];

  function handleClick(index) {
    //Using Array
    setIndex((prev) => {
      return prev.includes(index)
        ? prev.filter((ele) => index !== ele)
        : [...prev, index];
    });

    //Using set
    setNewSet((prev) => {
      let currSet = new Set(prev);
      if (currSet.has(index)) {
        currSet.delete(index);
      } else {
        currSet.add(index);
      }
      return currSet;
    });
  }

  return (
    <div>
      {accordionData.map((ele, i) => (
        <div key={i} onClick={() => handleClick(i)} className="border mb-2">
          <p className="p-2 cursor-pointer">{ele.title}</p>
          <p className="pl-4 text-sm">
            {/* Using Array */}
            {/* {index.includes(i) && ele.content} */}

            {/* Using Set */}
            {newSet.has(i) && ele.content}
          </p>
        </div>
      ))}
    </div>
  );
};
