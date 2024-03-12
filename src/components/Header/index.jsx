import styled from "styled-components";
import Logo from "../Logo";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
const Opcao = styled.li`
  margin: 0 10px;
  padding: 10px;
  list-style: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Opcoes = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const textoOpcoes = ["Categoria", "Favoritos", "Carrinho"];
export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Opcoes>
        {textoOpcoes.map((texto, index) => (
          <Opcao key={index}>{texto}</Opcao>
        ))}
      </Opcoes>
    </HeaderContainer>
  );
}
