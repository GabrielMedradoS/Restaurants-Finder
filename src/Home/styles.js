import styled from "styled-components";
import theme from "../theme";

export const Container = styled.aside`
  background: ${(props) => theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-x: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: "#ffffff";
  padding: 16px;
`;
