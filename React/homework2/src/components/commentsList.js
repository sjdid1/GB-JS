import React, { useState } from 'react';

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment" },
    { id: 2, text: "This is the second comment" },
    { id: 3, text: "This is the third comment" }
  ]);

  const handleDelete = (id) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;