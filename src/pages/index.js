import Header from "@/components/Header";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: lightblue;
  }
`;


export default function Home() {
  return (
  <>
  <Header />
      <GlobalStyle />
    <h1>Home</h1>
  </>
  );
}
