import { Button } from "../../components/Button"
import {
  BodyContainer,
  ButtonClose,
  ContainerButtonClose,
  HeaderContainer,
  LogoContainer,
  MainContainer 
} from "./styles";
import close from "../../assets/sair.png"
import logo from "../../assets/LOGO.png"
import { useNavigate } from "react-router-dom"
import { treinos } from "../../utils/treinos"

export function HomePage() {
  const navigate = useNavigate()


  function handleLogout() {
    navigate('/')
  }

  return (
    <BodyContainer>
      <HeaderContainer>
        <LogoContainer src={logo} />
        <ContainerButtonClose>
          <ButtonClose onClick={() => handleLogout()}>
            <img src={close} alt="Fechar" />
          </ButtonClose>
        </ContainerButtonClose>
      </HeaderContainer>
      <MainContainer>
        {treinos.map((treino) => {
          return <Button key={treino.id}>{treino.nome}</Button>
        })}
      </MainContainer>
    </BodyContainer>
  )
}