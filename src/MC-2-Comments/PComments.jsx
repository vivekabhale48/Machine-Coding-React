import { useState } from 'react';

export const PComments = ({ handleAddCommentClick, data }) => {
  const [showInput, setShowInput] = useState(false);
  const [nestedComment, setNestedComment] = useState('');

  function handleNestedCommentAddClick(commentId) {
    handleAddCommentClick(commentId, nestedComment, 'child')
    setShowInput(false);
  }

  return (
    <div className="mt-2">
      <div className="bg-[#eee] py-1 pl-3">
        <div className="bg-[#ccc] p-1">
          <div className="flex justify-between ">
            <h2 className="font-bold">{data?.comments}</h2>
            {!showInput && (
              <button
                onClick={() => setShowInput(true)}
                className="text-[12px] p-[2px] bg-[#000] text-[#fff] rounded"
              >
                reply
              </button>
            )}
          </div>
          {showInput && (
            <div className="flex gap-2">
              <input
                value={nestedComment}
                onChange={(e) => setNestedComment(e.target.value)}
                className="w-full border text-[12px]"
                type="text"
              />
              <button
                onClick={() => handleNestedCommentAddClick(data.id)}
                className="text-[12px] p-[2px] bg-[#000] text-[#fff] rounded"
              >
                Add
              </button>
              <button
                onClick={() => setShowInput(false)}
                className="text-[12px] p-[2px] bg-[#000] text-[#fff] rounded"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        {data.reply.length > 0 && (
          <div>
            {data.reply.map((ele) => (
              <PComments
                handleAddCommentClick={handleAddCommentClick}
                key={ele.id}
                data={ele}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
