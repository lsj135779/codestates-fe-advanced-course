import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LodingBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  font-size: 30px;
`;

export default function Loading() {
  return (
    <LodingBody>
      <FontAwesomeIcon icon={faSpinner} spin size={"4x"}></FontAwesomeIcon>
      <div>잠시만 기다려주세요...</div>
    </LodingBody>
  );
}
