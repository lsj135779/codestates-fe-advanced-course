import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import Post from "./../components/Post";
import Page from "./../components/Page";

export const Body = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 50px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    &:last-child {
      display: flex;
    }
  }
`;

const Search = styled.div`
  margin-right: 10px;
  input {
    background: #d9d9d9;
  }
  svg {
    cursor: pointer;
  }
`;

const PostHead = styled.div`
  background: #bbbbbb;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  height: 30px;
  margin-top: 10px;
  div {
    &:first-child {
      flex: 0.8 0 0;
      text-align: center;
    }
    &:last-child {
      flex: 0.2 0 0;
      text-align: center;
    }
  }
`;

const PageNum = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
    &:last-child {
      margin-left: 5px;
    }
  }
`;

const NoPost = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 20px;
`;

export default function Main() {
  const [pageNum, setPageNum] = useState(10); // 페이지당 보이는 게시글 수
  const [page, setPage] = useState(1); // 페이지값
  const [search, setSearch] = useState(""); // 검색어
  const [text, setText] = useState(""); // input 입력
  const posts = useSelector((state) => state.post.allPosts);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const options = [
    {
      name: "5개씩 보기",
      value: 5,
    },
    {
      name: "10개씩 보기",
      value: 10,
    },
    {
      name: "15개씩 보기",
      value: 15,
    },
    {
      name: "20개씩 보기",
      value: 20,
    },
  ];

  useEffect(() => {
    if (search) {
      setFilteredPosts(posts.filter((post) => post.title.includes(search)));
    } else {
      setFilteredPosts(posts);
    }
  }, [search, posts, pageNum]);

  return (
    <Body>
      <Top>
        <div>자유게시판</div>
        <div>
          <Search>
            <input
              type={"text"}
              value={text}
              placeholder={"Search"}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.code === "Enter" && text !== search) {
                  setSearch(text);
                }
              }}
            ></input>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => setSearch(text)}
            ></FontAwesomeIcon>
          </Search>
          <select
            name={"pageNum"}
            value={pageNum}
            onChange={(e) => setPageNum(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </Top>
      <PostHead>
        <div>제목</div>
        <div>작성자</div>
      </PostHead>
      {filteredPosts.length ? (
        <>
          {filteredPosts
            .slice(pageNum * (page - 1), pageNum * page)
            .map((post) => (
              <Post key={post.id} postData={post} />
            ))}
          <PageNum>
            <FontAwesomeIcon
              icon={faSquareCaretLeft}
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            ></FontAwesomeIcon>
            {Array(Math.ceil(filteredPosts.length / pageNum))
              .fill(0)
              .map((a, idx) => (
                <Page key={idx} page={page} idx={idx} setPage={setPage} />
              ))}
            <FontAwesomeIcon
              icon={faSquareCaretRight}
              onClick={() => {
                if (page < Math.ceil(filteredPosts.length / pageNum))
                  setPage(page + 1);
              }}
            ></FontAwesomeIcon>
          </PageNum>
        </>
      ) : (
        <NoPost>검색결과에 해당하는 게시글이 없습니다.</NoPost>
      )}
    </Body>
  );
}
