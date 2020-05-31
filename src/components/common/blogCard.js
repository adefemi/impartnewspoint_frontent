import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const removeTag = (content) => {
  const regex = /(<([^>]+)>)/gi;
  const regex2 = /(&([a-z]+);)/gi;
  return content.replace(regex, "").replace(regex2, "");
};

const BlogCard = (props) => {
  return (
    <div className="blogCard" key={props.id}>
      <div
        className="blogImage"
        style={{ backgroundImage: `url("${props.data.cover}")` }}
      />
      <div className="blogContent">
        <div>
          <div className="blogTitle">{props.data.title}</div>
          <p>
            {removeTag(props.data.content).toString().substring(0, 30)}
            {removeTag(props.data.content).toString().length > 30 && "..."}
          </p>
          <Link to={`/${props.data.slug}`}>
            <button>Continue Reading</button>
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

export default BlogCard;
