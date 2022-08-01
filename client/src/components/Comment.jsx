import styled from "styled-components";

const CommentBody = styled.div`
  border-bottom: 1px solid #9b9a9a;
  div {
    &:first-child {
      color: #4001c7;
      margin: 10px 0 0 40px;
    }
    &:last-child {
      margin: 5px 0 10px 40px;
    }
  }
`;

export default function Comment({ comment }) {
  return (
    <CommentBody>
      <div>{comment.name}</div>
      <div>{comment.body}</div>
    </CommentBody>
  );
}
