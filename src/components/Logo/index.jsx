import styled from "styled-components";
import logo from "../../images/logo.png";
import Image from 'next/image';
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
`;
const LogoImage = styled(Image)`
  width: 60px;  
  height: 60px;
  margin-right: 10px; 
`;

export default function Logo() {
  return (
    <>
      <LogoContainer>
       <LogoImage src={logo} alt="Logo" />
      </LogoContainer>
    </>
  );
}
