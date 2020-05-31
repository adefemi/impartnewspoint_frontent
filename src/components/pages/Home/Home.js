import React, { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import { BLOG_URL } from "../../utils/urls";
import Skeleton from "react-loading-skeleton";
import BlogCard from "../../common/blogCard";
import BlogCommon from "../../common/topBlogs";
import ReactPaginate from "react-paginate";

const Home = (props) => {
  const [fetching, setFetching] = useState(true);
  const [blogList, setBlogList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  let debouncer;

  useEffect(() => {
    setFetching(true);
    clearTimeout(debouncer);
    debouncer = setTimeout(() => {
      let extra = `?keyword=${search}&page=${currentPage}`;
      getBlogContent(extra);
    }, 1000);
  }, [search, currentPage]);

  const getBlogContent = (extra = "") => {
    axios
      .get(BLOG_URL + extra)
      .then((res) => {
        console.log(res.data);
        setBlogList(res.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="banner">
        <h3>Welcome to IMPARTNEWSPOINT</h3>
        <p>
          In here, you will get this latest news to every genre you can ever
          thing of.
        </p>
        <div className="searchBlog">
          <input
            placeholder="Search blog contents"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="blogListContainer">
        {fetching ? (
          <div className="blogList">
            <Skeleton height={200} />
            <br />
            <br />
            <Skeleton height={200} />
          </div>
        ) : (
          <div className="blogList">
            {blogList.results.map((item, id) => (
              <BlogCard key={id} data={item} />
            ))}
              {!fetching && (
                  <div className="pagination">
                      <br/>
                      <ReactPaginate
                          pageCount={Math.ceil(blogList.count / 20)}
                          pageRangeDisplayed={10}
                          onPageChange={(e) => setCurrentPage(e.selected + 1)}
                          marginPagesDisplayed={1}
                          forcePage={currentPage - 1}
                      />
                  </div>
              )}
          </div>
        )}

        <div className="blogExtras blogExtras-main">
          <h4>Top Blogs</h4>
          <BlogCommon />
        </div>
      </div>


      <br/><br/>
    </div>
  );
};

export default Home;
