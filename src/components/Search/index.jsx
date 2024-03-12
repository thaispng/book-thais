import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";
const PesquisaContainer = styled.section`
  background: linear-gradient(to right, #ee9ca7, #ffdde1);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px ;

  p{
        width: 100px;
  }
`;

function Search() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Procure seu livro</Subtitulo>
      <Input
        placeholder="Digite o nome do livro"
        onBlur={(e) => {
          const textDigitado = e.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      {livrosPesquisados.map((livro) => (
        <>
          <Resultado>
            <p>{livro.nome}</p>
            <p>{livro.autor}</p>
            <p>{livro.ano}</p>
          </Resultado>
        </>
      ))}
    </PesquisaContainer>
  );
}

export default Search;
