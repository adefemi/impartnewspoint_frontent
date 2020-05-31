import React from "react";
import moment from "moment";

const CommentCard = (props) => {
  return (
    <div className="comment-card">
      <p>{props.data.comment}</p>
      <div className="footer">
        By: {props.data.name}, On{" "}
        {moment(new Date(props.data.created_at)).format("YYYY-MM-DD")}
      </div>
    </div>
  );
};

export default CommentCard;
