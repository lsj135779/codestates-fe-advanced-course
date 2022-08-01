import styled from "styled-components";

const Num = styled.div`
  background: ${(props) => props.background};
  border: 1px solid black;
  margin-left: 5px;
  width: 20px;
  text-align: center;
  cursor: pointer;
`;

export default function Page({ page, idx, setPage }) {
  return (
    <Num
      background={page === idx + 1 ? "#4001C7" : "#FFFFFF"}
      onClick={() => {
        setPage(idx + 1);
      }}
    >
      <div>{idx + 1}</div>
    </Num>
  );
}
