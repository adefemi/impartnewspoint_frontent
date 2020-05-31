import React, { useState, useEffect, useContext } from "react";
import CommentCard from "./commentCard";
import axios from "axios";
import { BLOG_COMMENT_URL } from "../utils/urls";
import { store } from "../stateManagemnt/store";
import { CommentTriggerAction } from "../stateManagemnt/actions";

const Comments = (props) => {
  const [fetching, setFetching] = useState(true);
  const [commentList, setCommentList] = useState({});

  const {
    state: { commentTrigger },
    dispatch,
  } = useContext(store);

  useEffect(() => {
    getComments()
  }, [])

  useEffect(() => {
    if (commentTrigger) {
     getComments()
      dispatch({ type: CommentTriggerAction, payload: false });
    }
  }, [commentTrigger]);

  const getComments = () => {
    axios.get(BLOG_COMMENT_URL + `?blog_id=${props.id}`).then(
        (res) => {
          setCommentList(res.data);
          setFetching(false);
        },
        (err) => {
          console.log(err.response.data);
        }
    );
  }

  return (
    <div className="comentList">
      <h3>Comments</h3>
      {fetching && <i>Loading...</i>}
      {!fetching && commentList.results.length < 1 && (
        <h4>No comment available</h4>
      )}
      {!fetching &&
        commentList.results.map((item, key) => {
          return <CommentCard data={item} key={key} />;
        })}
    </div>
  );
};

export default Comments;
