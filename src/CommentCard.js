import React from "react";

function CommentCard({ message, name, image }) {
  return (
    <div className="commentcard">
      <img src={image} width={100} height={100} style={{ borderRadius: 50 }} />
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
}

export default CommentCard;
