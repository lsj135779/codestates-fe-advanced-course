import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { Body } from "./Main";
import { useState, useEffect } from "react";
import { getPostData } from "./../reducers/postSlice";
import { getCommentData } from "./../reducers/commentSlice";
import Comment from "./../components/Comment";
import Loading from "./../components/Loading";

const DetailBody = styled(Body)`
  height: ${(props) => props.height};
  border: 1px solid;
  box-shadow: gray 3px 3px 5px;
  border-radius: 5px;
`;

const Top = styled.div`
  width: 90%;
  margin: auto;
  border-bottom: 1px solid;
  div {
    &:first-child {
      text-align: left;
      font-size: 30px;
      margin: 20px 0 5px 40px;
    }
    &:last-child {
      text-align: right;
      margin: 0 40px 15px 0;
      font-size: 15px;
    }
  }
`;

const Middle = styled.div`
  width: 90%;
  height: 200px;
  margin: auto;
  border-bottom: 1px solid;
  position: relative;
  div {
    margin: 20px 0 0 40px;
    font-size: 20px;
    &:last-child {
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 15px;
    }
  }
`;

const Bottom = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
`;

export default function Detail() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comment.comment);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => {
          dispatch(getPostData(res.data));
        });
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((res) => {
          dispatch(getCommentData(res.data));
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <DetailBody height={isLoading ? "900px" : "auto"}>
      {!isLoading ? (
        <>
          <Top>
            <div>{post.title}</div>
            <div>작성자{post.userId}</div>
          </Top>
          <Middle>
            <div>{post.body}</div>
            <div>댓글수 {comments.length}</div>
          </Middle>
          <Bottom>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </Bottom>
        </>
      ) : (
        <Loading />
      )}
    </DetailBody>
  );
}
