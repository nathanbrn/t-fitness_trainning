import { Logo } from "../../components/Logo";
import { 
  ButtonContainer, 
  FooterContainer, 
  FormContainer, 
  HeaderContainer, 
  LoginContainer, 
  MainContainer 
} from "./styles";

export function LoginPage() {
  return (
    <LoginContainer>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>

      <MainContainer>
        <FormContainer>
          <input type="text" placeholder="Digite o usuário"/>
          <input type="password" placeholder="Digite a senha"/>
        </FormContainer>
        <ButtonContainer className="btnLogin">Login</ButtonContainer>
      </MainContainer>

      <FooterContainer>
        <p className="paragrafo">Desenvolvido por:</p>
        <a href="https://nathanbrn.github.io/Links_Sociais/" target="_blank">@breno_nathanael</a>
        <a className="insta" href="http://instagram.com/tiagootome" target="_blank">@tiagootome</a>
      </FooterContainer>
    </LoginContainer>
  )
}