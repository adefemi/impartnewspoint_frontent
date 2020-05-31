import React, { useState, useEffect } from "react";
import "./singleBlog.scss";
import Comments from "../../common/comments";
import CommentComp from "../../common/commentComp";
import axios from "axios";
import { BLOG_URL } from "../../utils/urls";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import BlogCommon from "../../common/topBlogs";

const SingleBlog = (props) => {
  const [fetching, setFetching] = useState(true);
  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    axios.get(BLOG_URL + props.match.params.slug).then(
      (res) => {
        setActiveBlog(res.data);
        setFetching(false);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="singleBlog">
      <div
        className="cover-main"
        style={{ backgroundImage: `url("${!fetching && activeBlog.cover}")` }}
      />
      <br />
      {fetching ? (
        <div className="blogListContainer">
          <div className="blogList">
            <div>
              <Skeleton height={40} width={100} />
            </div>
            <div>
              <Skeleton height={20} width={200} />
            </div>
            <br />
            <div>
              <Skeleton height={20} />
            </div>
            <p />
            <div>
              <Skeleton height={20} />
            </div>
            <p />
            <div>
              <Skeleton height={20} />
            </div>
            <p />
            <div>
              <Skeleton height={20} />
            </div>
          </div>
          <div className="blogExtras"></div>
        </div>
      ) : (
        <div className="blogListContainer">
          <div className="blogList">
            <h3>{activeBlog.title}</h3>
            <div className="author">
              Created By:{" "}
              <span className="textCapitalized">
                {activeBlog.author.username}
              </span>
              , On{" "}
              {moment(new Date(activeBlog.created_at)).format("YYYY-MM-DD")}
            </div>
            <p dangerouslySetInnerHTML={{ __html: activeBlog.content }} />

            <CommentComp id={activeBlog.id} />
            <Comments id={activeBlog.id} />
          </div>
          <div className="blogExtras">
            <h4>Related Blogs</h4>
            {!fetching && <BlogCommon similar id={activeBlog.id} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
