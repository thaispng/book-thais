import styled from "styled-components";

export const Titule = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.color || '##f05ae3'};
  font-family: "Roboto", sans-serif;
`;