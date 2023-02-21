import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { credentials } from "../../utils/credencials"
import { 
  ButtonContainer, 
  FooterContainer, 
  FormContainer, 
  HeaderContainer, 
  LoginContainer, 
  MainContainer 
} from "./styles"

export function LoginPage() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin() {
    const credentialsUser = credentials
    if (user === credentialsUser.name && password === credentialsUser.password) {
      navigate('/home')
    } else {
      console.log('Usuário ou senha incorretos');
    }
  }

  return (
    <LoginContainer>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>

      <MainContainer>
        <FormContainer>
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value
              setUser(value)
            }}
            value={user}
            placeholder="Digite o usuário"
          />
          <input
            type="password"
            onChange={(event) => {
              const value = event.target.value
              setPassword(value)
            }}
            value={password}
            placeholder="Digite a senha"
          />
        </FormContainer>
        <ButtonContainer onClick={() => handleLogin()} className="btnLogin">Login</ButtonContainer>
      </MainContainer>

      <FooterContainer>
        <p className="paragrafo">Desenvolvido por:</p>
        <a href="https://nathanbrn.github.io/Links_Sociais/" target="_blank">
          @breno_nathanael
        </a>
        <a
          className="insta"
          href="http://instagram.com/tiagootome"
          target="_blank"
        >
          @tiagootome
        </a>
      </FooterContainer>
    </LoginContainer>
  );
}