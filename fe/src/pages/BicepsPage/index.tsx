import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { treinos } from "../../utils/treinos";
import { 
    BodyContainer, 
    MainContainer, 
    Ul } 
from "./styles";

export function BicepsPage() {

    return (
      <BodyContainer>
        <Header />
        <MainContainer>
          {treinos.map((treino) => {
            return (
                <Button 
                    key={treino.categoriasAlfabetica?.b.id}
                >
                    <details>
                        <summary>
                            {treino.categoriasAlfabetica?.b.letra}
                        </summary>
                        <Ul>
                            {treino.categoriasAlfabetica?.b.treinos.map((treinoB) => (
                                <li>{ treinoB }</li>
                            ))}
                        </Ul>
                    </details>
                </Button>
            );
          })}
        </MainContainer>
      </BodyContainer>
    );
}