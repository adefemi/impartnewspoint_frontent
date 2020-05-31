import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const BlogCardExtra = (props) => {
  return (
    <div className="blogCardExtra">
      <div
        className="blogImage"
        style={{ backgroundImage: `url("${props.data.cover}")` }}
      />
      <div className="blogContent">
        <div>
          <div className="blogTitle">{props.data.title}</div>
          <Link to={`/${props.data.slug}`}>
            <button>Read More</button>
          </Link>
        </div>
        <div className="footer">
          Created By:{" "}
          <span className="textCapitalized">{props.data.author.username}</span>,
          On {moment(new Date(props.data.created_at)).format("YYYY-MM-DD")}
        </div>
      </div>
    </div>
  );
};

export default BlogCardExtra;
