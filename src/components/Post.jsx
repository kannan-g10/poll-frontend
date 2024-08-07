import React, { useState } from 'react';
import Comments from './Comments';
import { API_URL } from '../config/constants';

export default function Post({ poll }) {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');

  const handleComments = async () => {
    try {
      const res = await fetch(`${API_URL}/comments/${poll._id}`, {
        method: 'POST',
        body: JSON.stringify({
          comment: comment,
          pollId: poll._id,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });

      setComment('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-[70%] gap-4 my-5 border border-gray-400 rounded-lg p-5 text-center">
      <h2 className="text-start font-semibold text-xl">User</h2>
      <h3 className="font-bold text-xl m-3">{poll.question}</h3>
      <p className="font-normal text-lg bg-gray-300 p-2 m-1 hover:bg-gray-200 cursor-pointer">
        {poll.optionA}
      </p>
      <p className="font-normal text-lg bg-gray-300 p-2 m-1 hover:bg-gray-200 cursor-pointer">
        {poll.optionB}
      </p>
      <p className="font-normal text-lg bg-gray-300 p-2 m-1 hover:bg-gray-200 cursor-pointer">
        {poll.optionC}
      </p>

      <div className="flex justify-end items-center gap-6 my-6">
        <button
          className="bg-indigo-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-indigo-400"
          onClick={() => setShowComment(prev => !prev)}
        >
          {showComment ? 'Close' : 'Comments'}
        </button>
      </div>
      {showComment && (
        <div>
          <div className="flex gap-2 justify-center">
            <input
              type="text"
              id="comment"
              className="w-[70%]"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <button
              className="px-5 py-2 bg-violet-400 rounded-md font-semibold text-white hover:bg-violet-500"
              onClick={handleComments}
            >
              Post
            </button>
          </div>
          <div className="flex flex-col mx-[3rem] justify-center">
            <Comments id={poll._id} />
          </div>
        </div>
      )}
    </div>
  );
}
