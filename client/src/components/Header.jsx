import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContents = styled.div`
  background: #4900cc;
  display: flex;
  align-items: center;
  margin: auto;
  img {
    width: 150px;
    cursor: pointer;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContents>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt={"로고이미지"}
        onClick={() => navigate("/")}
      ></img>
    </HeaderContents>
  );
}
