import { Button } from "../../components/Button";
import { BodyContainer, ButtonClose, ContainerButtonClose, HeaderContainer, LogoContainer, MainContainer } from "./styles";
import close from "../../assets/sair.png";
import logo from "../../assets/LOGO.png";

export function HomePage() {
  const treinos = [
    {
      nome: 'Biceps',
      id: 1
    },
    {
      nome: 'Triceps',
      id: 2
    },
    {
      nome: 'Costas',
      id: 3
    },
    {
      nome: 'Peito',
      id: 4
    }, 
    {
      nome: 'Pernas',
      id: 5
    }
  ]

  return (
    <BodyContainer>
      <HeaderContainer>
        <LogoContainer src={logo} />
        <ContainerButtonClose>
          <ButtonClose>
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