import { ImageContainer } from "./styles";
import logo from "../../assets/LOGO.png";

export function Logo() {
    return (
        <ImageContainer className="logo" src={logo} />
    )
}