import React, { useEffect, useState } from 'react';
import { API_URL } from '../config/constants';

export default function Comments({ id }) {
  const [pollComment, setPollComment] = useState([]);

  useEffect(() => {
    async function getComments() {
      const res = await fetch(`${API_URL}/comments/${id}`);
      const data = await res.json();
      setPollComment(data.data.comments);
      // console.log(pollComment);
    }
    getComments();
  }, []);

  return (
    <>
      {pollComment.map(poll => (
        <div
          key={poll._id}
          className="flex items-center justify-start gap-3 mx-3 my-2"
        >
          <h1 className="text-sm">{poll.pollId}:</h1>
          <p className="text-md font-semibold py-2">{poll.comment}</p>
        </div>
      ))}
    </>
  );
}
