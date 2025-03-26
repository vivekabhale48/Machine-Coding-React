import { PComments } from './PComments';
import { useState } from 'react';
export const MainCommentSection = () => {
  let commentsData = [
    {
      id: 1,
      comments: 'Cute',
      reply: [
        {
          id: 1,
          comments: 'Awesome',
          reply: [],
        },
      ],
    },
    {
      id: 2,
      comments: 'Beauty Queen',
      reply: [],
    },
  ];

  const [addComment, setAddComment] = useState('');
  const [eachComment, setEachComment] = useState(commentsData);

  function makeNewCommentJson(commentText) {
    return {
      id: Date.now(),
      comments: commentText,
      reply: [],
    };
  }

  function handleAddCommentClick(commentId, commentText, call) {
    if (call === 'parent') {
      setEachComment((prev) => {
        return [...prev, makeNewCommentJson(addComment)];
      });
    } else if (call === 'child') {
      setEachComment((prevComment) => updateNestedComments(prevComment));

      const updateNestedComments = (commentsList) => {
        console.log(commentsList);
        return commentsList.map((ele) => {
          if (ele.id === commentId) {
            return {
              ...ele,
              reply: [...ele.reply, makeNewCommentJson(commentText)],
            };
          } else {
            return {
              ...ele,
              reply: updateNestedComments(ele.reply),
            };
          }
        });
      };
    }
  }

  return (
    <div>
      <div className="flex gap-2">
        <textarea
          className="w-full border"
          name="comments"
          value={addComment}
          cols="30"
          rows="3"
          onChange={(e) => setAddComment(e.target.value)}
        ></textarea>
        <button
          onClick={() => handleAddCommentClick(null, null, 'parent')}
          className="bg-[#57c7ff] text-[#fff] p-2 rounded"
        >
          Add Comment
        </button>
      </div>
      {eachComment.length > 0 && (
        <div>
          {eachComment.map((ele, index) => (
            <PComments
              key={ele.id}
              handleAddCommentClick={handleAddCommentClick}
              data={ele}
            />
          ))}
        </div>
      )}
    </div>
  );
};
