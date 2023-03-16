import { LogoContainer } from "./styles";
import { HeaderContainer } from "./styles";
import logo from "../../assets/LOGO.png"

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer src={logo} />
        </HeaderContainer>
    )
}