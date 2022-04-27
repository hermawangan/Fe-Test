import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { fetchPost } from "../redux";
import GetComment from "./GetComment";
import GetDetail from "./GetDetail";
import "./css/post.css";

function Post({ posts, fetchPost, loading }) {
  const [postsPerPage] = useState(10);
  const [offset, setOffset] = useState(1);
  const [postsAllData, setAllPostsData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [clickFromChild, setClickFromChild] = useState(false);

  useEffect(() => {
    fetchPost();
    const slice = posts.slice(offset - 1, offset - 1 + postsPerPage);
    setAllPostsData(slice);
    setPageCount(Math.ceil(posts.length / postsPerPage));
  }, [offset, posts]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const getClickFromChild = (click) => {
    setClickFromChild(click);
  };

  return (
    <>
      {loading ? (
        <p className="loading-info">Loading, please Wait</p>
      ) : (
        <div className="post-container">
          <div className="container-post">
            {postsAllData.map((post) => {
              return (
                <div className="li-container" key={post.id}>
                  <>
                    <ul className="container-title">
                      <li className="li-title">{post.title}</li>
                    </ul>

                    <div
                      className={clickFromChild ? "post-active" : "post-detail"}
                      key={post.id}
                    >
                      <GetComment id={post.id} />
                      <GetDetail
                        id={post.id}
                        clickForParents={getClickFromChild}
                      />
                    </div>
                  </>
                </div>
              );
            })}
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPost()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
