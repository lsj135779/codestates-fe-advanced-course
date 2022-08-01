import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const List = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid;
  cursor: pointer;
  div {
    &:first-child {
      flex: 0.8 0 0;
      margin-left: 10px;
    }
    &:last-child {
      flex: 0.2 0 0;
      text-align: center;
    }
  }
`;

export default function Post({ postData }) {
  const navigate = useNavigate();

  return (
    <List onClick={() => navigate(`/detail/${postData.id}`)}>
      <div>{postData.title}</div>
      <div>작성자{postData.userId}</div>
    </List>
  );
}
