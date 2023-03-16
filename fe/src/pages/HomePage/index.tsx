import { Button } from "../../components/Button"
import {
  BodyContainer,
  MainContainer 
} from "./styles";
import { useNavigate } from "react-router-dom"
import { treinos } from "../../utils/treinos"
import { Header } from "../../components/Header";

export function HomePage() {
  const navigate = useNavigate()

  return (
    <BodyContainer>
      <Header />
      <MainContainer>
        {
          treinos.map((treino) => {
            return (
              <Button 
                onClick={() => navigate(`${treino.nome}`)} 
                key={treino.id}
              >
                {treino.nome}
              </Button>
            )
          })
        }
      </MainContainer>
    </BodyContainer>
  )
}