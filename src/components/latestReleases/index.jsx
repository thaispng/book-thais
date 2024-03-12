import { livros } from "./dadosLatestReleases";
import styled from "styled-components";
import {Titule} from "../Titule";
import Card from "@/components/Card";
const ConatainerReleases = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
const NewConatainerReleases = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;
const TextConatainerReleases = styled.p`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: #696969;
  padding: 10px;
  margin: 15px;
  font-family: "Roboto", sans-serif;
`;
function latestReleases() {
  return (
    <ConatainerReleases>
      <Titule>Últimos lançamentos</Titule>
      <NewConatainerReleases>
        {livros.map((livro) => (
          <TextConatainerReleases key={livro.id}>
            {livro.nome}
          </TextConatainerReleases>
        ))}
      </NewConatainerReleases>
      <Card
     title={"Talvez você se interesse por esses livros"}
     name={"Pequeno Príncipe"}
      ano={"2021"}
      />
    </ConatainerReleases>
  );
}

export default latestReleases;
